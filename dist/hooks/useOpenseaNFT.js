"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOpenseaNFT = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const swr_1 = (0, tslib_1.__importDefault)(require("swr"));
const NFTFetchContext_1 = require("../context/NFTFetchContext");
const OpenseaUtils_1 = require("../fetcher/OpenseaUtils");
/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param contractAddress address of the contract
 * @param tokenId id of NFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
function useOpenseaNFT(contractAddress, tokenId, options = {}) {
    var _a;
    const fetcher = (0, react_1.useContext)(NFTFetchContext_1.NFTFetchContext);
    const { loadCurrencyInfo = false, refreshInterval, initialData } = options || {};
    const nftData = (0, swr_1.default)(contractAddress && tokenId ? ['loadGenericNFT', contractAddress, tokenId] : null, (_, contractAddress, tokenId) => fetcher.loadNFTDataUntransformed(contractAddress, tokenId), { dedupingInterval: 0 });
    const auctionData = (0, swr_1.default)(contractAddress && tokenId ? ['loadAuctionForNFT', contractAddress, tokenId] : null, (_, contractAddress, tokenId) => fetcher.loadAuctionInfo(contractAddress, tokenId));
    const nftResponseData = nftData.data;
    const currencyData = (0, swr_1.default)(nftResponseData && loadCurrencyInfo
        ? ['loadCurrencies', (_a = auctionData.data) === null || _a === void 0 ? void 0 : _a.auctionCurrency]
        : null, (_, ...currencies) => fetcher.loadCurrencies(currencies), {
        refreshInterval,
        dedupingInterval: 0,
    });
    let data = undefined;
    if (nftData.data !== undefined) {
        data = (0, OpenseaUtils_1.transformOpenseaResponse)(nftData.data, auctionData.data, currencyData.data);
    }
    else {
        data = initialData;
    }
    return {
        currencyLoaded: !!currencyData.data,
        error: nftData.error,
        data,
    };
}
exports.useOpenseaNFT = useOpenseaNFT;

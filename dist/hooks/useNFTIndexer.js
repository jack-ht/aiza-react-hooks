"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNFTIndexer = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const NFTFetchContext_1 = require("../context/NFTFetchContext");
const swr_1 = (0, tslib_1.__importDefault)(require("swr"));
const AizaIndexerTransformers_1 = require("../fetcher/AizaIndexerTransformers");
/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param contractAddress address of the contract, if null and tokenID is passed in, a ZNFT is assumed
 * @param tokenId id of NFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
function useNFTIndexer(contractAddress, tokenId, options = {}) {
    var _a;
    const fetcher = (0, react_1.useContext)(NFTFetchContext_1.NFTFetchContext);
    const { refreshInterval, initialData, loadCurrencyInfo = true } = options || {};
    const nftData = (0, swr_1.default)(contractAddress && tokenId
        ? ['loadIndexerNFT', contractAddress, tokenId]
        : null, (_, contractAddress, tokenId) => fetcher.loadAizaNFTIndexerNFTUntransformed(contractAddress, tokenId), { dedupingInterval: 0, initialData: initialData === null || initialData === void 0 ? void 0 : initialData.tokenData });
    // TODO(iain): Integrate auction data from aiza indexer into hook
    const auctionData = (0, swr_1.default)(contractAddress && tokenId ? ['loadAuctionForNFT', contractAddress, tokenId] : null, (_, contractAddress, tokenId) => fetcher.loadAuctionInfo(contractAddress, tokenId), { refreshInterval, initialData: initialData === null || initialData === void 0 ? void 0 : initialData.auctionData });
    const currencyData = (0, swr_1.default)(nftData && nftData.data && loadCurrencyInfo
        ? ['loadCurrencies', (_a = auctionData.data) === null || _a === void 0 ? void 0 : _a.auctionCurrency]
        : null, (_, ...currencies) => fetcher.loadCurrencies(currencies), {
        refreshInterval,
        dedupingInterval: 0,
    });
    let data = undefined;
    if (nftData.data !== undefined) {
        data = (0, AizaIndexerTransformers_1.transformNFTIndexerResponse)(nftData.data, auctionData.data, currencyData.data);
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
exports.useNFTIndexer = useNFTIndexer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAizaNFT = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const swr_1 = (0, tslib_1.__importDefault)(require("swr"));
const NFTFetchContext_1 = require("../context/NFTFetchContext");
const TransformFetchResults_1 = require("../fetcher/TransformFetchResults");
const ExtractResultData_1 = require("../fetcher/ExtractResultData");
/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param id id of zNFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
function useAizaNFT(id, options = {}) {
    const fetcher = (0, react_1.useContext)(NFTFetchContext_1.NFTFetchContext);
    const { loadCurrencyInfo = false, refreshInterval, initialData } = options || {};
    const nftData = (0, swr_1.default)(id ? ['loadZNFTDataUntransformed', id] : null, (_, id) => fetcher.loadZNFTDataUntransformed(id), { refreshInterval, dedupingInterval: 0 });
    const currencyData = (0, swr_1.default)(nftData.data && nftData.data.pricing && loadCurrencyInfo
        ? [
            'loadCurrencies',
            ...(0, ExtractResultData_1.getCurrenciesInUse)((0, TransformFetchResults_1.addAuctionInformation)(nftData.data.pricing)),
        ]
        : null, (_, ...currencies) => fetcher.loadCurrencies(currencies), {
        refreshInterval,
        dedupingInterval: 0,
    });
    let data;
    if (nftData.data !== undefined) {
        data = {
            ...nftData.data,
            pricing: (0, TransformFetchResults_1.addAuctionInformation)(nftData.data.pricing, currencyData.data),
        };
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
exports.useAizaNFT = useAizaNFT;

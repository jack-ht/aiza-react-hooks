"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAizaNFTGroup = void 0;
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
function useAizaNFTGroup(ids, type = 'creator', options = {}) {
    const fetcher = (0, react_1.useContext)(NFTFetchContext_1.NFTFetchContext);
    const { loadCurrencyInfo = false, refreshInterval, initialData } = options || {};
    const nftData = (0, swr_1.default)(ids ? ['fetchZNFTGroupData', type, ...ids] : null, (_, type, ...ids) => fetcher.fetchZNFTGroupData(ids, type), { refreshInterval, dedupingInterval: 0 });
    const currencyData = (0, swr_1.default)(nftData.data && nftData.data.length > 0 && loadCurrencyInfo
        ? [
            'loadCurrencies',
            ...nftData.data
                .map((item) => (0, ExtractResultData_1.getCurrenciesInUse)((0, TransformFetchResults_1.addAuctionInformation)(item.pricing)))
                .reduce((last, item) => last.concat(item), []),
        ]
        : null, (_, ...currencies) => fetcher.loadCurrencies(currencies), {
        refreshInterval,
        dedupingInterval: 0,
    });
    let medias;
    if (nftData.data !== undefined) {
        medias = nftData.data.map((media) => ({
            ...media,
            pricing: (0, TransformFetchResults_1.addAuctionInformation)(media.pricing, currencyData.data),
        }));
    }
    else {
        medias = initialData;
    }
    return {
        currencyLoaded: !!currencyData.data,
        error: nftData.error,
        medias,
    };
}
exports.useAizaNFTGroup = useAizaNFTGroup;

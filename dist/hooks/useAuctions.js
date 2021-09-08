"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuctions = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const swr_1 = (0, tslib_1.__importDefault)(require("swr"));
const NFTFetchContext_1 = require("../context/NFTFetchContext");
/**
 * Fetches on-chain NFT auction data for the given curator
 *
 * @param curators
 * @param approved
 * @returns useNFTType hook results include loading, error, and data (ReserveAuctionPartialFragment).
 */
function useAuctions(curators = [], approved = null, options) {
    const fetcher = (0, react_1.useContext)(NFTFetchContext_1.NFTFetchContext);
    const queryKey = JSON.stringify({ type: 'useAuctions', curators, approved });
    const { data, error } = (0, swr_1.default)(queryKey, async (query) => {
        const { curators, approved } = JSON.parse(query);
        return await fetcher.fetchReserveAuctions(curators.map((curator) => curator.toLowerCase()), approved);
    }, options);
    return {
        loading: !error && !data,
        error,
        data,
    };
}
exports.useAuctions = useAuctions;

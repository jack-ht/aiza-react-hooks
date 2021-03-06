"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNFTMetadata = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const swr_1 = (0, tslib_1.__importDefault)(require("swr"));
const NFTFetchContext_1 = require("../context/NFTFetchContext");
/**
 * Fetches NFT Metadata from IPFS.
 * This hook is cached, it can be called
 *  multiple times with no issue on one page.
 *
 * @param uri URI of metadata to fetch
 * @returns @type useNFTMetadataType
 */
function useNFTMetadata(uri, initialData) {
    const fetcher = (0, react_1.useContext)(NFTFetchContext_1.NFTFetchContext);
    const { error, data } = (0, swr_1.default)(uri ? ['loadMetadata', uri] : null, (_, uri) => fetcher.fetchIPFSMetadata(uri), { initialData });
    return {
        loading: !error && !data,
        error,
        metadata: data,
    };
}
exports.useNFTMetadata = useNFTMetadata;

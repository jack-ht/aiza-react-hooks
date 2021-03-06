"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNFTContent = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const swr_1 = (0, tslib_1.__importDefault)(require("swr"));
const NFTFetchContext_1 = require("../context/NFTFetchContext");
/**
 * Hook to fetch NFT content from uri and mimetype
 * Fetches text mime types and returns uris for non-text media
 * that should be embedded
 *
 * @param uri URI of content to load or return URI for
 * @param mimeType MIME type expected for content
 * @returns useNFTContentType
 */
function useNFTContent(uri, mimeType, options) {
    const fetcher = (0, react_1.useContext)(NFTFetchContext_1.NFTFetchContext);
    const mimeTypeFetched = (0, swr_1.default)(uri && !mimeType ? ['fetchContentMimeType', uri] : null, (_, uri) => fetcher.fetchContentMimeType(uri));
    const mimeTypeResult = mimeType || mimeTypeFetched.data;
    const content = (0, swr_1.default)(uri && mimeTypeResult ? ['fetchContent', uri, mimeTypeResult] : null, (_, uri, mimeTypeResult) => fetcher.fetchContent(uri, mimeTypeResult), options);
    const error = mimeTypeFetched.error || content.error;
    return {
        error,
        content: content.data,
    };
}
exports.useNFTContent = useNFTContent;

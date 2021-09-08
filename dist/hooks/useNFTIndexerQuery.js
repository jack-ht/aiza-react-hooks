"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNFTIndexerQuery = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const swr_1 = (0, tslib_1.__importDefault)(require("swr"));
const NFTFetchContext_1 = require("../context/NFTFetchContext");
/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param contractAddress address of the contract, if null and tokenID is passed in, a ZNFT is assumed
 * @param tokenId id of NFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
function useNFTIndexerQuery({ collectionAddress, owner, limit, offset }, options = {}) {
    const fetcher = (0, react_1.useContext)(NFTFetchContext_1.NFTFetchContext);
    const nftListData = (0, swr_1.default)(!options.initialData && collectionAddress
        ? ['useNFTIndexerGroup', collectionAddress, owner, limit, offset]
        : null, (_, collectionAddress, owner, limit, offset) => {
        if (owner) {
            return fetcher.fetchAizaIndexerUserOwnedNFTs({
                collectionAddress,
                userAddress: owner,
                limit,
                offset,
            });
        }
        return fetcher.fetchAizaIndexerGroupData({
            collectionAddress: collectionAddress,
            limit,
            offset,
        });
    }, options);
    return {
        error: nftListData.error,
        results: nftListData.data,
    };
}
exports.useNFTIndexerQuery = useNFTIndexerQuery;

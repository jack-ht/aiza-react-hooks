"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchZNFTGroupData = exports.fetchNFTData = exports.prepareJson = void 0;
const addresses_1 = require("../constants/addresses");
const OpenseaUtils_1 = require("./OpenseaUtils");
const TransformFetchResults_1 = require("./TransformFetchResults");
/**
 * This removes undefined values to sanitize
 * data objects to work with nextJS server-side
 * page props.
 *
 * @param json Object to sanitize for JSON fields
 * @returns JSON-safe object
 */
function prepareJson(json) {
    return JSON.parse(JSON.stringify(json));
}
exports.prepareJson = prepareJson;
/**
 * Async function to fetch auction information and metadata for any
 * NFT or zNFT. Mirrors behavior of useNFT hook but for server-side rendering.
 * Fetches all metadata and auction information server-side. Will be re-validated client-side.
 * Can pass return value directly into `initialData` for useNFT hook.
 *
 * @param tokenId: Token ID to fetch
 * @param contractAddress: Contract address to fetch token from
 * @param fetchAgent: MediaFetchAgent instance
 * @param prepareDataJSON: Sanitizes undefined fields to allow data to work with next.js
 * @returns object with nft and metadata fields, any issues throw an RequestError
 */
const fetchNFTData = async ({ tokenId, contractAddress, fetchAgent, prepareDataJSON = true, }) => {
    if (contractAddress &&
        contractAddress !== addresses_1.AIZA_MEDIA_CONTRACT_BY_NETWORK[fetchAgent.networkId]) {
        const auctionData = await fetchAgent.loadAuctionInfo(contractAddress, tokenId);
        const nft = await fetchAgent.loadNFTData(contractAddress, tokenId, auctionData);
        const metadata = (0, OpenseaUtils_1.openseaDataToMetadata)(nft);
        const response = {
            nft,
            metadata,
        };
        if (prepareDataJSON) {
            return prepareJson(response);
        }
        return response;
    }
    else {
        const nft = await fetchAgent.loadZNFTData(tokenId);
        const metadata = await fetchAgent.fetchIPFSMetadata(nft.nft.metadataURI);
        const response = {
            nft,
            metadata,
        };
        if (prepareDataJSON) {
            return prepareJson(response);
        }
        return response;
    }
};
exports.fetchNFTData = fetchNFTData;
/**
 * Server-side initial data hook for zNFTGroup data hook
 *
 * @param ids list of ids (addresses for creator or owner, znft id for NFT)
 * @param type type of 'id' or 'creator' or 'owner' to determine what type of data to fetch
 * @returns NFTDataType
 */
const fetchZNFTGroupData = async ({ ids, type, fetchAgent, prepareDataJSON = true, }) => {
    const nftGroup = await fetchAgent.fetchZNFTGroupData(ids, type);
    const response = nftGroup.map((media) => ({
        ...media,
        pricing: (0, TransformFetchResults_1.addAuctionInformation)(media.pricing),
    }));
    if (prepareDataJSON) {
        return prepareJson(response);
    }
    return response;
};
exports.fetchZNFTGroupData = fetchZNFTGroupData;

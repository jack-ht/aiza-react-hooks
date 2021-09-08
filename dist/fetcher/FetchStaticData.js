"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserOwnedNFTs = exports.fetchAizaIndexerItem = exports.getIndexerServerTokenInfo = exports.fetchAizaIndexerList = exports.fetchZNFTGroupData = exports.fetchNFTData = exports.prepareJson = void 0;
const address_1 = require("@ethersproject/address");
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
const transformServerSideIndexerDataList = async (fetchAgent, response) => {
    const auctionInfos = await fetchAgent.loadAuctionInfos(response.map((element) => `${element.address.toLowerCase()}-${element.tokenId}`));
    return response.map((tokenData) => {
        return {
            nft: {
                tokenData,
                auctionData: auctionInfos
                    .map((auction) => (auction instanceof Error ? undefined : auction))
                    .find((auction) => (auction === null || auction === void 0 ? void 0 : auction.tokenContract.toLowerCase()) === tokenData.address.toLowerCase() &&
                    auction.tokenId === tokenData.tokenId.toString()),
            },
        };
    });
};
/**
 * Server-side initial data hook for aiza nft indexer response data
 *
 * @param fetchAgent FetchAgent class
 * @param listOptions Options of what objects to list (limited to contract address at the moment)
 *    has limit and offset fields
 * @param prepareDataJson prepare data for vercel static prop passing by cleaning up invalid JSON objects
 */
const fetchAizaIndexerList = async (fetchAgent, listOptions, prepareDataJson = true) => {
    const response = await fetchAgent.fetchAizaIndexerGroupData(listOptions);
    const result = await transformServerSideIndexerDataList(fetchAgent, response);
    if (prepareDataJson) {
        return prepareJson(result);
    }
    return result;
};
exports.fetchAizaIndexerList = fetchAizaIndexerList;
const getIndexerServerTokenInfo = ({ nft: { tokenData }, }) => {
    var _a, _b, _c;
    return ({
        tokenId: tokenData.tokenId.toString(),
        tokenContract: tokenData.address,
        metadata: (_a = tokenData.metadata) === null || _a === void 0 ? void 0 : _a.json,
        image: ((_c = (_b = tokenData.metadata) === null || _b === void 0 ? void 0 : _b.json) === null || _c === void 0 ? void 0 : _c.image_url)
            ? tokenData.metadata.json.image_url
            : tokenData.media
                ? tokenData.media.contentURI
                : null,
    });
};
exports.getIndexerServerTokenInfo = getIndexerServerTokenInfo;
/**
 * Server-side initial data hook for aiza nft indexer response data
 *
 * @param fetchAgent FetchAgent class
 * @param listOptions Options of what objects to list (limited to contract address at the moment)
 *    has limit and offset fields
 * @param prepareDataJson prepare data for vercel static prop passing by cleaning up invalid JSON objects
 */
const fetchAizaIndexerItem = async (fetchAgent, listOptions, prepareDataJson = true) => {
    const response = await fetchAgent.fetchAizaNFTIndexerNFTs([
        `${(0, address_1.getAddress)(listOptions.collectionAddress)}-${listOptions.tokenId}`,
    ]);
    const result = await transformServerSideIndexerDataList(fetchAgent, response);
    if (prepareDataJson) {
        return prepareJson(result[0]);
    }
    return result[0];
};
exports.fetchAizaIndexerItem = fetchAizaIndexerItem;
/**
 * Server-side initial data hook for aiza nft indexer response data
 *
 * @param fetchAgent FetchAgent class
 * @param listOptions Options of what objects to list (limited to contract address at the moment)
 *    has limit and offset fields
 * @param prepareDataJson prepare data for vercel static prop passing by cleaning up invalid JSON objects
 */
const fetchUserOwnedNFTs = async (fetchAgent, { collectionAddress, userAddress, offset, limit, }, prepareDataJson = false) => {
    const response = await fetchAgent.fetchAizaIndexerUserOwnedNFTs({
        collectionAddress,
        userAddress,
        limit,
        offset,
    });
    const result = await transformServerSideIndexerDataList(fetchAgent, response);
    if (prepareDataJson) {
        return prepareJson(result);
    }
    return result;
};
exports.fetchUserOwnedNFTs = fetchUserOwnedNFTs;

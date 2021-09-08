import { TokenWithAuctionFragment } from '../graph-queries/aiza-indexer-types';
import { FetchGroupTypes } from './FetchResultTypes';
import { MediaFetchAgent } from './MediaFetchAgent';
import { FetchAizaIndexerItemType, FetchAizaIndexerListCollectionType } from './AizaIndexerTypes';
/**
 * This removes undefined values to sanitize
 * data objects to work with nextJS server-side
 * page props.
 *
 * @param json Object to sanitize for JSON fields
 * @returns JSON-safe object
 */
export declare function prepareJson<T>(json: T): T;
declare type fetchNFTDataType = {
    tokenId: string;
    contractAddress?: string;
    fetchAgent: MediaFetchAgent;
    prepareDataJSON?: boolean;
};
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
export declare const fetchNFTData: ({ tokenId, contractAddress, fetchAgent, prepareDataJSON, }: fetchNFTDataType) => Promise<{
    nft: import("./AuctionInfoTypes").NFTDataType;
    metadata: any;
}>;
declare type fetchZNFTGroupDataType = {
    ids: string[];
    type: FetchGroupTypes;
    fetchAgent: MediaFetchAgent;
    prepareDataJSON?: boolean;
};
/**
 * Server-side initial data hook for zNFTGroup data hook
 *
 * @param ids list of ids (addresses for creator or owner, znft id for NFT)
 * @param type type of 'id' or 'creator' or 'owner' to determine what type of data to fetch
 * @returns NFTDataType
 */
export declare const fetchZNFTGroupData: ({ ids, type, fetchAgent, prepareDataJSON, }: fetchZNFTGroupDataType) => Promise<{
    pricing: import("./AuctionInfoTypes").PricingInfoData;
    nft: import("./FetchResultTypes").NFTResultType;
    aizaNFT: Omit<import("../graph-queries/aiza-graph-types").NftMediaFragment, "id" | "owner" | "creator" | "currentAsk" | "currentBids"> & {
        creatorBidSharePercentage: number;
        ownerBidSharePercentage: number;
    };
}[]>;
/**
 * Server-side initial data hook for aiza nft indexer response data
 *
 * @param fetchAgent FetchAgent class
 * @param listOptions Options of what objects to list (limited to contract address at the moment)
 *    has limit and offset fields
 * @param prepareDataJson prepare data for vercel static prop passing by cleaning up invalid JSON objects
 */
export declare const fetchAizaIndexerList: (fetchAgent: MediaFetchAgent, listOptions: FetchAizaIndexerListCollectionType, prepareDataJson?: boolean) => Promise<{
    nft: {
        tokenData: TokenWithAuctionFragment;
        auctionData: import("../graph-queries/aiza-graph-types").ReserveAuctionPartialFragment | undefined;
    };
}[]>;
export declare const getIndexerServerTokenInfo: ({ nft: { tokenData }, }: {
    nft: {
        tokenData: TokenWithAuctionFragment;
    };
}) => {
    tokenId: string;
    tokenContract: string;
    metadata: any;
    image: any;
};
/**
 * Server-side initial data hook for aiza nft indexer response data
 *
 * @param fetchAgent FetchAgent class
 * @param listOptions Options of what objects to list (limited to contract address at the moment)
 *    has limit and offset fields
 * @param prepareDataJson prepare data for vercel static prop passing by cleaning up invalid JSON objects
 */
export declare const fetchAizaIndexerItem: (fetchAgent: MediaFetchAgent, listOptions: FetchAizaIndexerItemType, prepareDataJson?: boolean) => Promise<{
    nft: {
        tokenData: TokenWithAuctionFragment;
        auctionData: import("../graph-queries/aiza-graph-types").ReserveAuctionPartialFragment | undefined;
    };
}>;
/**
 * Server-side initial data hook for aiza nft indexer response data
 *
 * @param fetchAgent FetchAgent class
 * @param listOptions Options of what objects to list (limited to contract address at the moment)
 *    has limit and offset fields
 * @param prepareDataJson prepare data for vercel static prop passing by cleaning up invalid JSON objects
 */
export declare const fetchUserOwnedNFTs: (fetchAgent: MediaFetchAgent, { collectionAddress, userAddress, offset, limit, }: {
    collectionAddress: string;
    userAddress: string;
    offset?: number | undefined;
    limit?: number | undefined;
}, prepareDataJson?: boolean) => Promise<{
    nft: {
        tokenData: TokenWithAuctionFragment;
        auctionData: import("../graph-queries/aiza-graph-types").ReserveAuctionPartialFragment | undefined;
    };
}[]>;
export {};

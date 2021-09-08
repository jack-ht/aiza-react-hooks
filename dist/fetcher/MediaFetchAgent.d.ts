import type { NetworkIDs } from '../constants/networks';
import type { ReserveAuctionPartialFragment } from '../graph-queries/aiza-graph-types';
import { TokenWithAuctionFragment } from '../graph-queries/aiza-indexer-types';
import { FetchGroupTypes, MediaContentType, UsernameResponseType } from './FetchResultTypes';
import { CurrencyLookupType, NFTDataType, ZNFTMediaDataType } from './AuctionInfoTypes';
import { OpenseaResponse } from './OpenseaUtils';
import { FetchAizaIndexerListCollectionType } from './AizaIndexerTypes';
/**
 * Internal agent for NFT Hooks to fetch NFT information.
 * Can be used directly for interaction with non-react web frameworks or server frameworks.
 * Uses a cached promise-based API.
 * Fetches from IPFS providers and thegraph.
 */
export declare class MediaFetchAgent {
    readonly networkId: NetworkIDs;
    private timeouts;
    private loaders;
    constructor(network: NetworkIDs);
    /**
     * Clear all cached responses from metadata, currency, and NFT chain information loaders
     */
    clearCache(): void;
    /**
     * Gets information of currencies and trading prices from uniswap
     * @param currencies list of currency contract ids on ethereum
     * @returns Promise<CurrencyLookupType>
     */
    loadCurrencies(currencies: string[]): Promise<CurrencyLookupType>;
    /**
     * Fetch NFT content or retun URI if content shouild not be fetched
     * @param url NFT Content URL
     * @param contentType string mime type to fetch
     * @returns Promise<MediaContentType> Media content information or URL
     */
    fetchContent(url: string, contentType: string): Promise<MediaContentType>;
    /**
     * Fetch Content MIME type from content URI
     *
     * @param url IPFS Content URI
     * @returns mime type as a string
     * @throws RequestError
     */
    fetchContentMimeType(url: string): Promise<string>;
    /**
     * Un-batched fetch function to fetch a group of ZNFT data
     *
     * @param ids list of ids to query
     * @param type type of ids: creator, id (of media), owner
     * @returns
     */
    fetchZNFTGroupData(ids: string[], type: FetchGroupTypes): Promise<ZNFTMediaDataType[]>;
    fetchAizaNFTIndexerNFTs(keys: readonly string[]): Promise<any[]>;
    loadAizaNFTIndexerNFTUntransformed(contractAddress: string, tokenId: string): Promise<TokenWithAuctionFragment>;
    loadAizaNFTIndexerNFTsUntransformed(tokenAndIds: readonly string[]): Promise<(Error | TokenWithAuctionFragment)[]>;
    /**
     * Un-batched fetch function to fetch a group of NFT data from the aiza indexer
     *
     * @param ids list of ids to query
     * @param type type of ids: creator, id (of media), owner
     * @returns
     */
    fetchAizaIndexerGroupData({ collectionAddress, curatorAddress, limit, offset, }: FetchAizaIndexerListCollectionType): Promise<TokenWithAuctionFragment[]>;
    /**
     * Un-batched fetch function to fetch a group of NFT data from the aiza indexer
     *
     * @param ids list of ids to query
     * @param type type of ids: creator, id (of media), owner
     * @returns
     */
    fetchAizaIndexerUserOwnedNFTs({ collectionAddress, userAddress, offset, limit, }: {
        collectionAddress: string;
        userAddress: string;
        offset?: number;
        limit?: number;
    }): Promise<TokenWithAuctionFragment[]>;
    /**
     * Get on-chain AIZA NFT ID associated media information
     *
     * @param mediaId AIZA NFT id to retrieve information of
     * @returns Promise<NFTDataType> On-chain NFT data
     */
    loadZNFTData(mediaId: string, currencyInfos?: CurrencyLookupType): Promise<NFTDataType>;
    loadNFTData(contractAddress: string, tokenId: string, auctionData?: ReserveAuctionPartialFragment, currencyData?: CurrencyLookupType): Promise<import("./AuctionInfoTypes").OpenseaNFTDataType>;
    loadNFTDataUntransformed(contractAddress: string, tokenId: string): Promise<OpenseaResponse>;
    loadZNFTDataUntransformed(mediaId: string): Promise<ZNFTMediaDataType>;
    loadAuctionInfo(tokenContract: string, tokenId: string): Promise<ReserveAuctionPartialFragment>;
    loadAuctionInfos(tokenContractAndIds: readonly string[]): Promise<(Error | ReserveAuctionPartialFragment)[]>;
    /**
     *
     * @param address string address of username to load
     * @returns
     */
    loadUsername(address: string): Promise<UsernameResponseType>;
    /**
     * Fetch function to retrieve Graph data for matching curated auctions
     * This function is not cached
     *
     * @function fetchReserveAuctions
     * @private
     * @param curatorIds list of Aiza NFT IDs to fetch from the graph datastore
     * @returns mapped transformed list of curated auction results
     */
    fetchReserveAuctions(curatorIds: readonly string[], isApproved?: boolean | null, first?: number, skip?: number): Promise<({
        __typename?: "ReserveAuction" | undefined;
    } & {
        __typename?: "ReserveAuction" | undefined;
    } & Pick<import("../graph-queries/aiza-graph-types").ReserveAuction, "id" | "status" | "createdAtTimestamp" | "transactionHash" | "approved" | "tokenId" | "tokenContract" | "reservePrice" | "firstBidTime" | "token" | "approvedTimestamp" | "curatorFeePercentage" | "duration" | "expectedEndTimestamp" | "finalizedAtTimestamp"> & {
        curator: {
            __typename?: "User" | undefined;
        } & Pick<import("../graph-queries/aiza-graph-types").User, "id">;
        tokenOwner: {
            __typename?: "User" | undefined;
        } & Pick<import("../graph-queries/aiza-graph-types").User, "id">;
        auctionCurrency: {
            __typename?: "Currency" | undefined;
        } & {
            __typename?: "Currency" | undefined;
        } & Pick<import("../graph-queries/aiza-graph-types").Currency, "symbol" | "id" | "name" | "decimals">;
        currentBid?: import("../graph-queries/aiza-graph-types").Maybe<{
            __typename?: "ReserveAuctionBid" | undefined;
        } & {
            __typename?: "ReserveAuctionBid" | undefined;
        } & Pick<import("../graph-queries/aiza-graph-types").ReserveAuctionBid, "amount" | "createdAtTimestamp" | "transactionHash" | "bidType"> & {
            bidder: {
                __typename?: "User" | undefined;
            } & Pick<import("../graph-queries/aiza-graph-types").User, "id">;
        }> | undefined;
        previousBids?: import("../graph-queries/aiza-graph-types").Maybe<({
            __typename?: "InactiveReserveAuctionBid" | undefined;
        } & {
            __typename?: "InactiveReserveAuctionBid" | undefined;
        } & Pick<import("../graph-queries/aiza-graph-types").InactiveReserveAuctionBid, "id" | "amount" | "createdAtTimestamp" | "transactionHash" | "bidType" | "bidInactivatedAtTimestamp" | "bidInactivatedAtBlockNumber"> & {
            bidder: {
                __typename?: "User" | undefined;
            } & Pick<import("../graph-queries/aiza-graph-types").User, "id">;
        })[]> | undefined;
    })[]>;
    private fetchAuctionNFTInfo;
    /**
     * Internal fetch current auctions by curator
     *
     * @function fetchMediaGraph
     * @private
     * @param mediaIds list of Aiza NFT IDs to fetch from the graph datastore
     * @returns mapped transformed list of aiza NFT ID data
     */
    private fetchMediaGraph;
    /**
     * Fetches generic NFT information
     *
     * @param nftAddresses list of addresses in a 0xcontractid:tokenid format
     * @returns
     */
    private fetchGenericNFT;
    /**
     * Fetches aiza username information from blockchain addresses for displaying user
     * information.
     *
     * @param addresses string list of addresses to map to Aiza usernames
     * @returns list of UsernameResponseType - all fields are optional except address
     */
    private fetchAizaUsernames;
    /**
     * Internal fetch function to retrieve currency information from TheGraph
     *
     * @function fetchCurrenciesGraph
     * @private
     * @param currencyContracts list of Ethereum addresses of currency contract data to retrieve
     * @returns mapped transformed list of ETH currency mapping data
     */
    private fetchCurrenciesGraph;
    /**
     * Fetch method to query metadata from IPFS. Not cached
     *
     * @function fetchIPFSMetadataCached
     * @public
     * @param url Metadata Source
     * @returns IPFS Metadata Fetch
     * @throws RequestError
     */
    fetchIPFSMetadata(url: string): Promise<any>;
}

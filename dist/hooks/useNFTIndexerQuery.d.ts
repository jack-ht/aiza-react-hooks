import { SWRConfiguration } from 'swr';
import { TokenWithAuctionFragment } from '../graph-queries/aiza-indexer-types';
export declare type useNFTType = {
    error?: string;
    results?: TokenWithAuctionFragment[];
};
declare type OptionsType = SWRConfiguration;
declare type QueryType = {
    collectionAddress: string;
    owner?: string;
    offset?: number;
    limit?: number;
};
/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param contractAddress address of the contract, if null and tokenID is passed in, a ZNFT is assumed
 * @param tokenId id of NFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export declare function useNFTIndexerQuery({ collectionAddress, owner, limit, offset }: QueryType, options?: OptionsType): useNFTType;
export {};

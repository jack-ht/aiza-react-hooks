import { ReserveAuctionPartialWithMediaFragment } from '../graph-queries/aiza-graph-types';
import { SWRConfiguration } from 'swr';
export declare type useAuctionHouseType = {
    loading: boolean;
    error?: string;
    data?: ReserveAuctionPartialWithMediaFragment[];
};
/**
 * Fetches on-chain NFT auction data for the given curator
 *
 * @param curators
 * @param approved
 * @returns useNFTType hook results include loading, error, and data (ReserveAuctionPartialFragment).
 */
export declare function useAuctions(curators?: readonly string[], approved?: boolean | null, options?: SWRConfiguration<ReserveAuctionPartialWithMediaFragment[]>): useAuctionHouseType;

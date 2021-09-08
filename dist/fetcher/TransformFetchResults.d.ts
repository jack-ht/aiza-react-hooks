import type { CurrencyShortFragment, GetMediaAndAuctionsQuery, NftMediaFullDataFragment, ReserveAuctionPartialFragment } from '../graph-queries/aiza-graph-types';
import type { GetTokenPricesQuery } from '../graph-queries/uniswap-types';
import { ChainCurrencyType } from './FetchResultTypes';
import { CurrencyLookupType, ZNFTMediaDataType, PricingInfoData } from './AuctionInfoTypes';
import { NetworkIDs } from '../constants/networks';
export declare function transformCurrencyEth(currency: CurrencyShortFragment): {
    __typename?: "Currency" | undefined;
    symbol: string;
    id: string;
    name: string;
    decimals?: import("../graph-queries/aiza-graph-types").Maybe<number> | undefined;
};
export declare function transformMediaItem(media: NftMediaFullDataFragment, networkId: NetworkIDs): ZNFTMediaDataType;
export declare function transformMediaForKey(result: GetMediaAndAuctionsQuery, key: string, networkId: NetworkIDs): ZNFTMediaDataType;
export declare function auctionDataToPricing(auctionData: ReserveAuctionPartialFragment | undefined): {
    auctionCurrency: {
        __typename?: "Currency" | undefined;
        symbol: string;
        id: string;
        name: string;
        decimals?: import("../graph-queries/aiza-graph-types").Maybe<number> | undefined;
    };
    __typename?: "ReserveAuction" | undefined;
    id: string;
    status: import("../graph-queries/aiza-graph-types").ReserveAuctionStatus;
    createdAtTimestamp: any;
    transactionHash: string;
    approved: boolean;
    tokenId: any;
    tokenContract: string;
    reservePrice: any;
    firstBidTime?: any;
    token: string;
    approvedTimestamp?: any;
    curatorFeePercentage: number;
    duration: any;
    expectedEndTimestamp?: any;
    finalizedAtTimestamp?: any;
    curator: {
        __typename?: "User" | undefined;
    } & Pick<import("../graph-queries/aiza-graph-types").User, "id">;
    tokenOwner: {
        __typename?: "User" | undefined;
    } & Pick<import("../graph-queries/aiza-graph-types").User, "id">;
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
} | null;
export declare function transformCurrencyForKey(result: GetTokenPricesQuery, key: string): ChainCurrencyType;
export declare function addAuctionInformation(pricing: ZNFTMediaDataType['pricing'], currencyInfos?: CurrencyLookupType): PricingInfoData;

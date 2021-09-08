import { AskPriceFragment, BidDataPartialFragment, CurrencyShortFragment, CurrentReserveBidFragment, Maybe, NftMediaFragment, PreviousReserveBidFragment, ReserveAuctionPartialFragment } from '../graph-queries/aiza-graph-types';
import { ChainCurrencyType, NFTResultType, ReserveAuctionBidsWithCurrency } from '../fetcher/FetchResultTypes';
import { AuctionStateInfo } from './AuctionState';
import { OpenseaResponse } from './OpenseaUtils';
import { TokenWithAuctionFragment } from '../graph-queries/aiza-indexer-types';
export declare type PricingInfo = {
    currency: CurrencyShortFragment;
    amount: string;
    prettyAmount: string;
    computedValue?: PricingInfoValue;
};
export declare type BidPricingInfo = {
    pricing: PricingInfo;
};
export declare type PastReserveBid = Omit<PreviousReserveBidFragment, 'amount'> & BidPricingInfo;
export declare type CurrentReserveBid = Omit<CurrentReserveBidFragment, 'amount'> & BidPricingInfo;
export declare type PerpetualBid = Omit<BidDataPartialFragment, 'currency' | 'amount'> & BidPricingInfo;
export declare type PerpetualAsk = Pick<AskPriceFragment, 'id' | 'createdAtTimestamp'> & BidPricingInfo;
export declare type PricingInfoValue = {
    inUSD: string;
    inETH: string;
};
export declare enum AuctionType {
    NONE = "NONE",
    PERPETUAL = "PERPETUAL",
    RESERVE = "RESERVE"
}
export declare type CommonNFTMediaDataType = {
    nft: NFTResultType;
    pricing: {
        perpetual?: {
            bids: BidDataPartialFragment[];
            ask: Maybe<AskPriceFragment>;
        };
        reserve: Maybe<ReserveAuctionPartialFragment>;
    };
};
declare type AizaNFTType = Omit<NftMediaFragment, 'currentBids' | 'currentAsk' | 'id' | 'owner' | 'creator'> & {
    creatorBidSharePercentage: number;
    ownerBidSharePercentage: number;
};
export declare type ZNFTMediaDataType = CommonNFTMediaDataType & {
    aizaNFT: AizaNFTType;
};
export declare type OpenseaNFTMediaDataType = CommonNFTMediaDataType & {
    openseaInfo: OpenseaResponse;
};
export declare type HighestBidType = {
    pricing: PricingInfo;
    placedBy: string;
    placedAt: string;
};
export declare type PricingInfoData = {
    status: AuctionStateInfo;
    perpetual: {
        bids: PerpetualBid[];
        ask?: PerpetualAsk;
        highestBid?: HighestBidType;
    };
    reserve?: ReserveAuctionBidsWithCurrency & {
        current: {
            highestBid?: HighestBidType;
            likelyHasEnded: boolean;
            reserveMet: boolean;
        };
        reservePrice?: PricingInfo;
        currentBid?: CurrentReserveBid;
        previousBids: PastReserveBid[];
    };
    auctionType: AuctionType;
};
export declare type ZNFTDataType = Omit<ZNFTMediaDataType, 'pricing'> & {
    pricing: PricingInfoData;
};
export declare type OpenseaNFTDataType = Omit<OpenseaNFTMediaDataType, 'pricing'> & {
    pricing: PricingInfoData;
};
export declare type IndexerDataType = Omit<CommonNFTMediaDataType, 'pricing'> & {
    aizaIndexerResponse: TokenWithAuctionFragment;
    aizaNFT?: AizaNFTType;
    pricing: PricingInfoData;
};
export declare type NFTDataType = ZNFTDataType | OpenseaNFTDataType | IndexerDataType;
export declare type CurrencyLookupType = {
    [currencyId: string]: ChainCurrencyType;
};
export {};

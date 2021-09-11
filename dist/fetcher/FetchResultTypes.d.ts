import { TokenShortFragment } from '../graph-queries/uniswap-types';
import { ReserveAuctionPartialFragment } from '../graph-queries/aiza-graph-types';
import { CurrentReserveBid, PastReserveBid } from './AuctionInfoTypes';
export declare type MediaContentType = {
    uri: string;
    type: 'uri';
    mimeType: string;
} | {
    text: string;
    type: 'text';
    mimeType: string;
};
export declare type FetchGroupTypes = 'id' | 'creator' | 'owner';
declare type MetadataIsh = {
    mimeType: string;
    name: string;
    description: string;
    animation_url?: string;
    image?: string;
};
export declare type MetadataResultType = {
    metadata: MetadataIsh;
};
export declare type AuctionResultType = ReserveAuctionPartialFragment;
export declare type AuctionsResult = AuctionResultType[];
export declare type UsernameResponseType = {
    address: string;
    bio?: string;
    name?: string;
    username?: string;
    verified?: boolean;
    website?: string;
};
export declare enum KNOWN_CONTRACTS {
    AIZA = "aiza"
}
declare type ETHAddress = string;
export declare type NFTResultType = {
    tokenId: string;
    contract: {
        address: string;
        knownContract?: KNOWN_CONTRACTS;
    };
    owner: ETHAddress;
    creator?: ETHAddress;
    metadataURI: string;
};
export declare type GenericNFTResponseType = {
    metadata: MetadataIsh;
};
export declare type AizaMedia = {
    metadataHash: string;
    contentURI: string;
    contentHash?: string;
    creatorSharePercentage: number;
    creatorBidShare: string;
    createdAtTimestamp: string;
};
export declare type ReserveAuctionBidsWithCurrency = Omit<ReserveAuctionPartialFragment, 'previousBids' | 'currentBid' | 'reservePrice'> & {
    previousBids: PastReserveBid[];
    currentBid?: CurrentReserveBid;
};
export declare type AizaUsernameFetchResult = {
    name: string;
    profileImageURL: string;
    username: string;
    verified: string;
};
export declare type ChainCurrencyType = {
    ethToUsd: string;
    token: TokenShortFragment;
};
export {};

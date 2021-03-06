import { ReserveAuctionPartialFragment } from '../graph-queries/aiza-graph-types';
import { CurrencyLookupType, OpenseaNFTDataType } from './AuctionInfoTypes';
export declare type OpenseaResponse = {
    token_id: string;
    description: string;
    name: string;
    image_url: string;
    image_thumbnail_url: string;
    image_original_url: string;
    animation_url: string;
    animation_original_url: string;
    external_link: string;
    token_metadata: string;
    asset_contract: {
        address: string;
        created_date: string;
        name: string;
        schema_name: string;
    };
    owner: {
        address: string;
    };
    creator?: {
        address: string;
    };
};
export declare const openseaDataToMetadata: (response: OpenseaNFTDataType) => {
    name: string;
    description: string;
    image: string;
    image_thumbnail_url: string;
    animation_url: string;
};
export declare const transformOpenseaResponse: (data: OpenseaResponse, auctionData?: ReserveAuctionPartialFragment | undefined, currencyData?: CurrencyLookupType | undefined) => OpenseaNFTDataType;
export declare const transformGenericNFTForKey: (response: OpenseaResponse[], key: string) => OpenseaResponse;

import { ZNFTDataType } from '../fetcher/AuctionInfoTypes';
export declare type useZNFTType = {
    currencyLoaded: boolean;
    error?: string;
    data?: ZNFTDataType;
};
declare type OptionsType = {
    refreshInterval?: number;
    initialData?: any;
    loadCurrencyInfo?: boolean;
};
/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param id id of zNFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
export declare function useAizaNFT(id?: string, options?: OptionsType): useZNFTType;
export {};

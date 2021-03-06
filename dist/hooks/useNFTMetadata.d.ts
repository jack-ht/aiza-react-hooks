export declare type useNFTMetadataType = {
    loading: boolean;
    error?: Error;
    metadata: any;
};
/**
 * Fetches NFT Metadata from IPFS.
 * This hook is cached, it can be called
 *  multiple times with no issue on one page.
 *
 * @param uri URI of metadata to fetch
 * @returns @type useNFTMetadataType
 */
export declare function useNFTMetadata(uri?: string, initialData?: any): useNFTMetadataType;

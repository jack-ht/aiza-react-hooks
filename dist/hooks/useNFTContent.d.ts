import { SWRConfiguration } from 'swr';
import { MediaContentType } from '../fetcher/FetchResultTypes';
export declare type useNFTContentType = {
    error?: string;
    content?: MediaContentType;
};
/**
 * Hook to fetch NFT content from uri and mimetype
 * Fetches text mime types and returns uris for non-text media
 * that should be embedded
 *
 * @param uri URI of content to load or return URI for
 * @param mimeType MIME type expected for content
 * @returns useNFTContentType
 */
export declare function useNFTContent(uri?: string, mimeType?: string, options?: SWRConfiguration<MediaContentType>): useNFTContentType;

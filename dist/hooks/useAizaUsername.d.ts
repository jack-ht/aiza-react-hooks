import { SWRConfiguration } from 'swr';
/**
 * useAizaUsername - Load aiza username for pretty display
 *
 * @param address string address to fetch aiza username of
 * @returns UsernameResponseType
 */
export declare function useAizaUsername(address: string, options?: SWRConfiguration<any>): {
    error: any;
    username: any;
};

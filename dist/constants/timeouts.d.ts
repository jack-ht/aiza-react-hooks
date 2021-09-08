export declare type RequestType = 'Aiza' | 'AizaIndexer' | 'Graph' | 'IPFS' | 'OpenSea';
export declare type TimeoutsLookupType = Record<RequestType, number>;
export declare const DEFAULT_NETWORK_TIMEOUTS_MS: TimeoutsLookupType;

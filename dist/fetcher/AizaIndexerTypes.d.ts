export declare type NFTQueryInfo = {
    address: string;
    tokenId: string;
};
export declare type FetchAizaIndexerListCollectionType = {
    collectionAddress?: string;
    curatorAddress?: string;
    tokenId?: string;
    limit: number;
    offset: number;
};
export declare type FetchAizaIndexerItemType = {
    collectionAddress: string;
    tokenId: string;
};
export declare type FetchAizaIndexerQueryType = {
    curatorIds?: string[];
    creatorIds?: string[];
    ownerIds?: string[];
    limit: number;
    offset: number;
};

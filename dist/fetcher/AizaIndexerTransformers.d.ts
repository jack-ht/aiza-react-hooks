import { ReserveAuctionPartialFragment } from '../graph-queries/aiza-graph-types';
import { TokenWithAuctionFragment } from '../graph-queries/aiza-indexer-types';
import { CurrencyLookupType, IndexerDataType } from './AuctionInfoTypes';
export declare function transformNFTIndexerResponse(data: TokenWithAuctionFragment, auction?: ReserveAuctionPartialFragment, currency?: CurrencyLookupType): IndexerDataType;

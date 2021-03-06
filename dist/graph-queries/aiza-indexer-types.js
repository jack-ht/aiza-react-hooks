"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_By = exports.Transaction_Select_Column = exports.Token_Select_Column = exports.TokenTransferEvent_Select_Column = exports.TokenMetadata_Select_Column = exports.TokenContract_Select_Column = exports.Media_Select_Column = exports.MediaTokenUriUpdatedEvent_Select_Column = exports.MediaTokenMetadataUriUpdatedEvent_Select_Column = exports.MediaMint_Select_Column = exports.MediaMetadata_Select_Column = exports.MarketBid_Select_Column = exports.MarketBidShare_Select_Column = exports.MarketBidShareEvent_Select_Column = exports.MarketBidEvent_Select_Column = exports.MarketAsk_Select_Column = exports.MarketAskEvent_Select_Column = exports.EventLog_Select_Column = exports.Currency_Select_Column = exports.Auction_Select_Column = exports.AuctionReservePriceUpdatedEvent_Select_Column = exports.AuctionEndedEvent_Select_Column = exports.AuctionDurationExtendedEvent_Select_Column = exports.AuctionCreatedEvent_Select_Column = exports.AuctionCanceledEvent_Select_Column = exports.AuctionBidEvent_Select_Column = exports.AuctionApprovalUpdatedEvent_Select_Column = void 0;
/** select columns of table "auction_approval_updated_event" */
var AuctionApprovalUpdatedEvent_Select_Column;
(function (AuctionApprovalUpdatedEvent_Select_Column) {
    /** column name */
    AuctionApprovalUpdatedEvent_Select_Column["Address"] = "address";
    /** column name */
    AuctionApprovalUpdatedEvent_Select_Column["Approved"] = "approved";
    /** column name */
    AuctionApprovalUpdatedEvent_Select_Column["AuctionId"] = "auctionId";
    /** column name */
    AuctionApprovalUpdatedEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    AuctionApprovalUpdatedEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    AuctionApprovalUpdatedEvent_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    AuctionApprovalUpdatedEvent_Select_Column["Id"] = "id";
    /** column name */
    AuctionApprovalUpdatedEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    AuctionApprovalUpdatedEvent_Select_Column["TokenContract"] = "tokenContract";
    /** column name */
    AuctionApprovalUpdatedEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    AuctionApprovalUpdatedEvent_Select_Column["TransactionHash"] = "transactionHash";
})(AuctionApprovalUpdatedEvent_Select_Column = exports.AuctionApprovalUpdatedEvent_Select_Column || (exports.AuctionApprovalUpdatedEvent_Select_Column = {}));
/** select columns of table "auction_bid_event" */
var AuctionBidEvent_Select_Column;
(function (AuctionBidEvent_Select_Column) {
    /** column name */
    AuctionBidEvent_Select_Column["Address"] = "address";
    /** column name */
    AuctionBidEvent_Select_Column["AuctionId"] = "auctionId";
    /** column name */
    AuctionBidEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    AuctionBidEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    AuctionBidEvent_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    AuctionBidEvent_Select_Column["Extended"] = "extended";
    /** column name */
    AuctionBidEvent_Select_Column["FirstBid"] = "firstBid";
    /** column name */
    AuctionBidEvent_Select_Column["Id"] = "id";
    /** column name */
    AuctionBidEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    AuctionBidEvent_Select_Column["Sender"] = "sender";
    /** column name */
    AuctionBidEvent_Select_Column["TokenContract"] = "tokenContract";
    /** column name */
    AuctionBidEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    AuctionBidEvent_Select_Column["TransactionHash"] = "transactionHash";
    /** column name */
    AuctionBidEvent_Select_Column["Value"] = "value";
})(AuctionBidEvent_Select_Column = exports.AuctionBidEvent_Select_Column || (exports.AuctionBidEvent_Select_Column = {}));
/** select columns of table "auction_canceled_event" */
var AuctionCanceledEvent_Select_Column;
(function (AuctionCanceledEvent_Select_Column) {
    /** column name */
    AuctionCanceledEvent_Select_Column["Address"] = "address";
    /** column name */
    AuctionCanceledEvent_Select_Column["AuctionId"] = "auctionId";
    /** column name */
    AuctionCanceledEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    AuctionCanceledEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    AuctionCanceledEvent_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    AuctionCanceledEvent_Select_Column["Id"] = "id";
    /** column name */
    AuctionCanceledEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    AuctionCanceledEvent_Select_Column["TokenContract"] = "tokenContract";
    /** column name */
    AuctionCanceledEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    AuctionCanceledEvent_Select_Column["TokenOwner"] = "tokenOwner";
    /** column name */
    AuctionCanceledEvent_Select_Column["TransactionHash"] = "transactionHash";
})(AuctionCanceledEvent_Select_Column = exports.AuctionCanceledEvent_Select_Column || (exports.AuctionCanceledEvent_Select_Column = {}));
/** select columns of table "auction_created_event" */
var AuctionCreatedEvent_Select_Column;
(function (AuctionCreatedEvent_Select_Column) {
    /** column name */
    AuctionCreatedEvent_Select_Column["Address"] = "address";
    /** column name */
    AuctionCreatedEvent_Select_Column["AuctionCurrency"] = "auctionCurrency";
    /** column name */
    AuctionCreatedEvent_Select_Column["AuctionId"] = "auctionId";
    /** column name */
    AuctionCreatedEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    AuctionCreatedEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    AuctionCreatedEvent_Select_Column["Curator"] = "curator";
    /** column name */
    AuctionCreatedEvent_Select_Column["CuratorFeePercentage"] = "curatorFeePercentage";
    /** column name */
    AuctionCreatedEvent_Select_Column["Duration"] = "duration";
    /** column name */
    AuctionCreatedEvent_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    AuctionCreatedEvent_Select_Column["Id"] = "id";
    /** column name */
    AuctionCreatedEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    AuctionCreatedEvent_Select_Column["ReservePrice"] = "reservePrice";
    /** column name */
    AuctionCreatedEvent_Select_Column["TokenContract"] = "tokenContract";
    /** column name */
    AuctionCreatedEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    AuctionCreatedEvent_Select_Column["TokenOwner"] = "tokenOwner";
    /** column name */
    AuctionCreatedEvent_Select_Column["TransactionHash"] = "transactionHash";
})(AuctionCreatedEvent_Select_Column = exports.AuctionCreatedEvent_Select_Column || (exports.AuctionCreatedEvent_Select_Column = {}));
/** select columns of table "auction_duration_extended_event" */
var AuctionDurationExtendedEvent_Select_Column;
(function (AuctionDurationExtendedEvent_Select_Column) {
    /** column name */
    AuctionDurationExtendedEvent_Select_Column["Address"] = "address";
    /** column name */
    AuctionDurationExtendedEvent_Select_Column["AuctionId"] = "auctionId";
    /** column name */
    AuctionDurationExtendedEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    AuctionDurationExtendedEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    AuctionDurationExtendedEvent_Select_Column["Duration"] = "duration";
    /** column name */
    AuctionDurationExtendedEvent_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    AuctionDurationExtendedEvent_Select_Column["Id"] = "id";
    /** column name */
    AuctionDurationExtendedEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    AuctionDurationExtendedEvent_Select_Column["TokenContract"] = "tokenContract";
    /** column name */
    AuctionDurationExtendedEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    AuctionDurationExtendedEvent_Select_Column["TransactionHash"] = "transactionHash";
})(AuctionDurationExtendedEvent_Select_Column = exports.AuctionDurationExtendedEvent_Select_Column || (exports.AuctionDurationExtendedEvent_Select_Column = {}));
/** select columns of table "auction_ended_event" */
var AuctionEndedEvent_Select_Column;
(function (AuctionEndedEvent_Select_Column) {
    /** column name */
    AuctionEndedEvent_Select_Column["Address"] = "address";
    /** column name */
    AuctionEndedEvent_Select_Column["Amount"] = "amount";
    /** column name */
    AuctionEndedEvent_Select_Column["AuctionCurrency"] = "auctionCurrency";
    /** column name */
    AuctionEndedEvent_Select_Column["AuctionId"] = "auctionId";
    /** column name */
    AuctionEndedEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    AuctionEndedEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    AuctionEndedEvent_Select_Column["Curator"] = "curator";
    /** column name */
    AuctionEndedEvent_Select_Column["CuratorFee"] = "curatorFee";
    /** column name */
    AuctionEndedEvent_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    AuctionEndedEvent_Select_Column["Id"] = "id";
    /** column name */
    AuctionEndedEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    AuctionEndedEvent_Select_Column["TokenContract"] = "tokenContract";
    /** column name */
    AuctionEndedEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    AuctionEndedEvent_Select_Column["TokenOwner"] = "tokenOwner";
    /** column name */
    AuctionEndedEvent_Select_Column["TransactionHash"] = "transactionHash";
    /** column name */
    AuctionEndedEvent_Select_Column["Winner"] = "winner";
})(AuctionEndedEvent_Select_Column = exports.AuctionEndedEvent_Select_Column || (exports.AuctionEndedEvent_Select_Column = {}));
/** select columns of table "auction_reserve_price_updated_event" */
var AuctionReservePriceUpdatedEvent_Select_Column;
(function (AuctionReservePriceUpdatedEvent_Select_Column) {
    /** column name */
    AuctionReservePriceUpdatedEvent_Select_Column["Address"] = "address";
    /** column name */
    AuctionReservePriceUpdatedEvent_Select_Column["AuctionId"] = "auctionId";
    /** column name */
    AuctionReservePriceUpdatedEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    AuctionReservePriceUpdatedEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    AuctionReservePriceUpdatedEvent_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    AuctionReservePriceUpdatedEvent_Select_Column["Id"] = "id";
    /** column name */
    AuctionReservePriceUpdatedEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    AuctionReservePriceUpdatedEvent_Select_Column["ReservePrice"] = "reservePrice";
    /** column name */
    AuctionReservePriceUpdatedEvent_Select_Column["TokenContract"] = "tokenContract";
    /** column name */
    AuctionReservePriceUpdatedEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    AuctionReservePriceUpdatedEvent_Select_Column["TransactionHash"] = "transactionHash";
})(AuctionReservePriceUpdatedEvent_Select_Column = exports.AuctionReservePriceUpdatedEvent_Select_Column || (exports.AuctionReservePriceUpdatedEvent_Select_Column = {}));
/** select columns of table "auction" */
var Auction_Select_Column;
(function (Auction_Select_Column) {
    /** column name */
    Auction_Select_Column["AmountTokenOwnerReceived"] = "amountTokenOwnerReceived";
    /** column name */
    Auction_Select_Column["Approved"] = "approved";
    /** column name */
    Auction_Select_Column["AuctionCurrency"] = "auctionCurrency";
    /** column name */
    Auction_Select_Column["AuctionId"] = "auctionId";
    /** column name */
    Auction_Select_Column["Curator"] = "curator";
    /** column name */
    Auction_Select_Column["CuratorFee"] = "curatorFee";
    /** column name */
    Auction_Select_Column["CuratorFeePercentage"] = "curatorFeePercentage";
    /** column name */
    Auction_Select_Column["Duration"] = "duration";
    /** column name */
    Auction_Select_Column["ExpiresAt"] = "expiresAt";
    /** column name */
    Auction_Select_Column["FirstBidTime"] = "firstBidTime";
    /** column name */
    Auction_Select_Column["LastBidAmount"] = "lastBidAmount";
    /** column name */
    Auction_Select_Column["LastBidder"] = "lastBidder";
    /** column name */
    Auction_Select_Column["ReservePrice"] = "reservePrice";
    /** column name */
    Auction_Select_Column["TokenContract"] = "tokenContract";
    /** column name */
    Auction_Select_Column["TokenId"] = "tokenId";
    /** column name */
    Auction_Select_Column["TokenOwner"] = "tokenOwner";
    /** column name */
    Auction_Select_Column["Winner"] = "winner";
})(Auction_Select_Column = exports.Auction_Select_Column || (exports.Auction_Select_Column = {}));
/** select columns of table "currency" */
var Currency_Select_Column;
(function (Currency_Select_Column) {
    /** column name */
    Currency_Select_Column["Address"] = "address";
    /** column name */
    Currency_Select_Column["Decimals"] = "decimals";
    /** column name */
    Currency_Select_Column["Name"] = "name";
    /** column name */
    Currency_Select_Column["Symbol"] = "symbol";
})(Currency_Select_Column = exports.Currency_Select_Column || (exports.Currency_Select_Column = {}));
/** select columns of table "raw_log" */
var EventLog_Select_Column;
(function (EventLog_Select_Column) {
    /** column name */
    EventLog_Select_Column["Address"] = "address";
    /** column name */
    EventLog_Select_Column["BlockHash"] = "blockHash";
    /** column name */
    EventLog_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    EventLog_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    EventLog_Select_Column["Data"] = "data";
    /** column name */
    EventLog_Select_Column["Id"] = "id";
    /** column name */
    EventLog_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    EventLog_Select_Column["Topics"] = "topics";
    /** column name */
    EventLog_Select_Column["TransactionHash"] = "transactionHash";
})(EventLog_Select_Column = exports.EventLog_Select_Column || (exports.EventLog_Select_Column = {}));
/** select columns of table "ask_event" */
var MarketAskEvent_Select_Column;
(function (MarketAskEvent_Select_Column) {
    /** column name */
    MarketAskEvent_Select_Column["Address"] = "address";
    /** column name */
    MarketAskEvent_Select_Column["Amount"] = "amount";
    /** column name */
    MarketAskEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    MarketAskEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    MarketAskEvent_Select_Column["Currency"] = "currency";
    /** column name */
    MarketAskEvent_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    MarketAskEvent_Select_Column["Id"] = "id";
    /** column name */
    MarketAskEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    MarketAskEvent_Select_Column["Status"] = "status";
    /** column name */
    MarketAskEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    MarketAskEvent_Select_Column["TransactionHash"] = "transactionHash";
})(MarketAskEvent_Select_Column = exports.MarketAskEvent_Select_Column || (exports.MarketAskEvent_Select_Column = {}));
/** select columns of table "ask" */
var MarketAsk_Select_Column;
(function (MarketAsk_Select_Column) {
    /** column name */
    MarketAsk_Select_Column["Address"] = "address";
    /** column name */
    MarketAsk_Select_Column["Amount"] = "amount";
    /** column name */
    MarketAsk_Select_Column["CurrencyAddress"] = "currencyAddress";
    /** column name */
    MarketAsk_Select_Column["Status"] = "status";
    /** column name */
    MarketAsk_Select_Column["TokenId"] = "tokenId";
})(MarketAsk_Select_Column = exports.MarketAsk_Select_Column || (exports.MarketAsk_Select_Column = {}));
/** select columns of table "bid_event" */
var MarketBidEvent_Select_Column;
(function (MarketBidEvent_Select_Column) {
    /** column name */
    MarketBidEvent_Select_Column["Address"] = "address";
    /** column name */
    MarketBidEvent_Select_Column["Amount"] = "amount";
    /** column name */
    MarketBidEvent_Select_Column["Bidder"] = "bidder";
    /** column name */
    MarketBidEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    MarketBidEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    MarketBidEvent_Select_Column["CurrencyAddress"] = "currencyAddress";
    /** column name */
    MarketBidEvent_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    MarketBidEvent_Select_Column["Id"] = "id";
    /** column name */
    MarketBidEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    MarketBidEvent_Select_Column["Recipient"] = "recipient";
    /** column name */
    MarketBidEvent_Select_Column["SellOnShare"] = "sellOnShare";
    /** column name */
    MarketBidEvent_Select_Column["Status"] = "status";
    /** column name */
    MarketBidEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    MarketBidEvent_Select_Column["TransactionHash"] = "transactionHash";
})(MarketBidEvent_Select_Column = exports.MarketBidEvent_Select_Column || (exports.MarketBidEvent_Select_Column = {}));
/** select columns of table "bid_share_event" */
var MarketBidShareEvent_Select_Column;
(function (MarketBidShareEvent_Select_Column) {
    /** column name */
    MarketBidShareEvent_Select_Column["Address"] = "address";
    /** column name */
    MarketBidShareEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    MarketBidShareEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    MarketBidShareEvent_Select_Column["Creator"] = "creator";
    /** column name */
    MarketBidShareEvent_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    MarketBidShareEvent_Select_Column["Id"] = "id";
    /** column name */
    MarketBidShareEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    MarketBidShareEvent_Select_Column["Owner"] = "owner";
    /** column name */
    MarketBidShareEvent_Select_Column["PrevOwner"] = "prevOwner";
    /** column name */
    MarketBidShareEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    MarketBidShareEvent_Select_Column["TransactionHash"] = "transactionHash";
})(MarketBidShareEvent_Select_Column = exports.MarketBidShareEvent_Select_Column || (exports.MarketBidShareEvent_Select_Column = {}));
/** select columns of table "bid_share" */
var MarketBidShare_Select_Column;
(function (MarketBidShare_Select_Column) {
    /** column name */
    MarketBidShare_Select_Column["Creator"] = "creator";
    /** column name */
    MarketBidShare_Select_Column["Owner"] = "owner";
    /** column name */
    MarketBidShare_Select_Column["PrevOwner"] = "prevOwner";
    /** column name */
    MarketBidShare_Select_Column["TokenId"] = "tokenId";
})(MarketBidShare_Select_Column = exports.MarketBidShare_Select_Column || (exports.MarketBidShare_Select_Column = {}));
/** select columns of table "bid" */
var MarketBid_Select_Column;
(function (MarketBid_Select_Column) {
    /** column name */
    MarketBid_Select_Column["Amount"] = "amount";
    /** column name */
    MarketBid_Select_Column["Bidder"] = "bidder";
    /** column name */
    MarketBid_Select_Column["CurrencyAddress"] = "currencyAddress";
    /** column name */
    MarketBid_Select_Column["Id"] = "id";
    /** column name */
    MarketBid_Select_Column["Recipient"] = "recipient";
    /** column name */
    MarketBid_Select_Column["SellOnShare"] = "sellOnShare";
    /** column name */
    MarketBid_Select_Column["Status"] = "status";
    /** column name */
    MarketBid_Select_Column["TokenId"] = "tokenId";
})(MarketBid_Select_Column = exports.MarketBid_Select_Column || (exports.MarketBid_Select_Column = {}));
/** select columns of table "metadata" */
var MediaMetadata_Select_Column;
(function (MediaMetadata_Select_Column) {
    /** column name */
    MediaMetadata_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    MediaMetadata_Select_Column["CreatedAt"] = "createdAt";
    /** column name */
    MediaMetadata_Select_Column["Id"] = "id";
    /** column name */
    MediaMetadata_Select_Column["Json"] = "json";
    /** column name */
    MediaMetadata_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    MediaMetadata_Select_Column["TokenId"] = "tokenId";
    /** column name */
    MediaMetadata_Select_Column["UpdatedAt"] = "updatedAt";
    /** column name */
    MediaMetadata_Select_Column["Uri"] = "uri";
})(MediaMetadata_Select_Column = exports.MediaMetadata_Select_Column || (exports.MediaMetadata_Select_Column = {}));
/** select columns of table "mint_event" */
var MediaMint_Select_Column;
(function (MediaMint_Select_Column) {
    /** column name */
    MediaMint_Select_Column["Address"] = "address";
    /** column name */
    MediaMint_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    MediaMint_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    MediaMint_Select_Column["ContentHash"] = "contentHash";
    /** column name */
    MediaMint_Select_Column["ContentUri"] = "contentURI";
    /** column name */
    MediaMint_Select_Column["Creator"] = "creator";
    /** column name */
    MediaMint_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    MediaMint_Select_Column["Id"] = "id";
    /** column name */
    MediaMint_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    MediaMint_Select_Column["MetadataHash"] = "metadataHash";
    /** column name */
    MediaMint_Select_Column["MetadataUri"] = "metadataURI";
    /** column name */
    MediaMint_Select_Column["TokenId"] = "tokenId";
    /** column name */
    MediaMint_Select_Column["TransactionHash"] = "transactionHash";
})(MediaMint_Select_Column = exports.MediaMint_Select_Column || (exports.MediaMint_Select_Column = {}));
/** select columns of table "metadata_uri_updated_event" */
var MediaTokenMetadataUriUpdatedEvent_Select_Column;
(function (MediaTokenMetadataUriUpdatedEvent_Select_Column) {
    /** column name */
    MediaTokenMetadataUriUpdatedEvent_Select_Column["Address"] = "address";
    /** column name */
    MediaTokenMetadataUriUpdatedEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    MediaTokenMetadataUriUpdatedEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    MediaTokenMetadataUriUpdatedEvent_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    MediaTokenMetadataUriUpdatedEvent_Select_Column["Id"] = "id";
    /** column name */
    MediaTokenMetadataUriUpdatedEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    MediaTokenMetadataUriUpdatedEvent_Select_Column["Owner"] = "owner";
    /** column name */
    MediaTokenMetadataUriUpdatedEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    MediaTokenMetadataUriUpdatedEvent_Select_Column["TransactionHash"] = "transactionHash";
    /** column name */
    MediaTokenMetadataUriUpdatedEvent_Select_Column["Uri"] = "uri";
})(MediaTokenMetadataUriUpdatedEvent_Select_Column = exports.MediaTokenMetadataUriUpdatedEvent_Select_Column || (exports.MediaTokenMetadataUriUpdatedEvent_Select_Column = {}));
/** select columns of table "media_uri_updated_event" */
var MediaTokenUriUpdatedEvent_Select_Column;
(function (MediaTokenUriUpdatedEvent_Select_Column) {
    /** column name */
    MediaTokenUriUpdatedEvent_Select_Column["Address"] = "address";
    /** column name */
    MediaTokenUriUpdatedEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    MediaTokenUriUpdatedEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    MediaTokenUriUpdatedEvent_Select_Column["EventLogId"] = "eventLogId";
    /** column name */
    MediaTokenUriUpdatedEvent_Select_Column["Id"] = "id";
    /** column name */
    MediaTokenUriUpdatedEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    MediaTokenUriUpdatedEvent_Select_Column["Owner"] = "owner";
    /** column name */
    MediaTokenUriUpdatedEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    MediaTokenUriUpdatedEvent_Select_Column["TransactionHash"] = "transactionHash";
    /** column name */
    MediaTokenUriUpdatedEvent_Select_Column["Uri"] = "uri";
})(MediaTokenUriUpdatedEvent_Select_Column = exports.MediaTokenUriUpdatedEvent_Select_Column || (exports.MediaTokenUriUpdatedEvent_Select_Column = {}));
/** select columns of table "media" */
var Media_Select_Column;
(function (Media_Select_Column) {
    /** column name */
    Media_Select_Column["Address"] = "address";
    /** column name */
    Media_Select_Column["ContentHash"] = "contentHash";
    /** column name */
    Media_Select_Column["ContentUri"] = "contentURI";
    /** column name */
    Media_Select_Column["Creator"] = "creator";
    /** column name */
    Media_Select_Column["CreatorBidShare"] = "creatorBidShare";
    /** column name */
    Media_Select_Column["MetadataHash"] = "metadataHash";
    /** column name */
    Media_Select_Column["MetadataUri"] = "metadataURI";
    /** column name */
    Media_Select_Column["MintTransferEventId"] = "mintTransferEventId";
    /** column name */
    Media_Select_Column["Owner"] = "owner";
    /** column name */
    Media_Select_Column["OwnerBidShare"] = "ownerBidShare";
    /** column name */
    Media_Select_Column["PrevOwner"] = "prevOwner";
    /** column name */
    Media_Select_Column["PrevOwnerBidShare"] = "prevOwnerBidShare";
    /** column name */
    Media_Select_Column["TokenId"] = "tokenId";
})(Media_Select_Column = exports.Media_Select_Column || (exports.Media_Select_Column = {}));
/** select columns of table "nft_contract" */
var TokenContract_Select_Column;
(function (TokenContract_Select_Column) {
    /** column name */
    TokenContract_Select_Column["Address"] = "address";
    /** column name */
    TokenContract_Select_Column["DeployedAtBlockNumber"] = "deployedAtBlockNumber";
    /** column name */
    TokenContract_Select_Column["Name"] = "name";
    /** column name */
    TokenContract_Select_Column["SupportsMetadata"] = "supportsMetadata";
    /** column name */
    TokenContract_Select_Column["Symbol"] = "symbol";
})(TokenContract_Select_Column = exports.TokenContract_Select_Column || (exports.TokenContract_Select_Column = {}));
/** select columns of table "nft_metadata" */
var TokenMetadata_Select_Column;
(function (TokenMetadata_Select_Column) {
    /** column name */
    TokenMetadata_Select_Column["Address"] = "address";
    /** column name */
    TokenMetadata_Select_Column["CreatedAt"] = "createdAt";
    /** column name */
    TokenMetadata_Select_Column["Id"] = "id";
    /** column name */
    TokenMetadata_Select_Column["Json"] = "json";
    /** column name */
    TokenMetadata_Select_Column["TokenId"] = "tokenId";
    /** column name */
    TokenMetadata_Select_Column["TokenUri"] = "tokenURI";
})(TokenMetadata_Select_Column = exports.TokenMetadata_Select_Column || (exports.TokenMetadata_Select_Column = {}));
/** select columns of table "nft_transfer_event" */
var TokenTransferEvent_Select_Column;
(function (TokenTransferEvent_Select_Column) {
    /** column name */
    TokenTransferEvent_Select_Column["Address"] = "address";
    /** column name */
    TokenTransferEvent_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    TokenTransferEvent_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    TokenTransferEvent_Select_Column["From"] = "from";
    /** column name */
    TokenTransferEvent_Select_Column["Id"] = "id";
    /** column name */
    TokenTransferEvent_Select_Column["LogIndex"] = "logIndex";
    /** column name */
    TokenTransferEvent_Select_Column["RawLogId"] = "rawLogId";
    /** column name */
    TokenTransferEvent_Select_Column["To"] = "to";
    /** column name */
    TokenTransferEvent_Select_Column["TokenId"] = "tokenId";
    /** column name */
    TokenTransferEvent_Select_Column["TransactionHash"] = "transactionHash";
})(TokenTransferEvent_Select_Column = exports.TokenTransferEvent_Select_Column || (exports.TokenTransferEvent_Select_Column = {}));
/** select columns of table "token" */
var Token_Select_Column;
(function (Token_Select_Column) {
    /** column name */
    Token_Select_Column["Address"] = "address";
    /** column name */
    Token_Select_Column["Id"] = "id";
    /** column name */
    Token_Select_Column["MetadataId"] = "metadataId";
    /** column name */
    Token_Select_Column["MintTransferEventId"] = "mintTransferEventId";
    /** column name */
    Token_Select_Column["Minter"] = "minter";
    /** column name */
    Token_Select_Column["Name"] = "name";
    /** column name */
    Token_Select_Column["Owner"] = "owner";
    /** column name */
    Token_Select_Column["SupportsMetadata"] = "supportsMetadata";
    /** column name */
    Token_Select_Column["Symbol"] = "symbol";
    /** column name */
    Token_Select_Column["TokenId"] = "tokenId";
    /** column name */
    Token_Select_Column["TokenUri"] = "tokenURI";
})(Token_Select_Column = exports.Token_Select_Column || (exports.Token_Select_Column = {}));
/** select columns of table "transaction" */
var Transaction_Select_Column;
(function (Transaction_Select_Column) {
    /** column name */
    Transaction_Select_Column["BlockHash"] = "blockHash";
    /** column name */
    Transaction_Select_Column["BlockNumber"] = "blockNumber";
    /** column name */
    Transaction_Select_Column["BlockTimestamp"] = "blockTimestamp";
    /** column name */
    Transaction_Select_Column["FailureReason"] = "failureReason";
    /** column name */
    Transaction_Select_Column["From"] = "from";
    /** column name */
    Transaction_Select_Column["Gas"] = "gas";
    /** column name */
    Transaction_Select_Column["GasPrice"] = "gasPrice";
    /** column name */
    Transaction_Select_Column["Hash"] = "hash";
    /** column name */
    Transaction_Select_Column["Input"] = "input";
    /** column name */
    Transaction_Select_Column["Network"] = "network";
    /** column name */
    Transaction_Select_Column["Nonce"] = "nonce";
    /** column name */
    Transaction_Select_Column["Status"] = "status";
    /** column name */
    Transaction_Select_Column["To"] = "to";
    /** column name */
    Transaction_Select_Column["TransactionIndex"] = "transactionIndex";
    /** column name */
    Transaction_Select_Column["Value"] = "value";
})(Transaction_Select_Column = exports.Transaction_Select_Column || (exports.Transaction_Select_Column = {}));
/** column ordering options */
var Order_By;
(function (Order_By) {
    /** in ascending order, nulls last */
    Order_By["Asc"] = "asc";
    /** in ascending order, nulls first */
    Order_By["AscNullsFirst"] = "asc_nulls_first";
    /** in ascending order, nulls last */
    Order_By["AscNullsLast"] = "asc_nulls_last";
    /** in descending order, nulls first */
    Order_By["Desc"] = "desc";
    /** in descending order, nulls first */
    Order_By["DescNullsFirst"] = "desc_nulls_first";
    /** in descending order, nulls last */
    Order_By["DescNullsLast"] = "desc_nulls_last";
})(Order_By = exports.Order_By || (exports.Order_By = {}));

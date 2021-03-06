"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._SubgraphErrorPolicy_ = exports.User_OrderBy = exports.UriUpdate_OrderBy = exports.UriUpdateType = exports.Transfer_OrderBy = exports.ReserveAuction_OrderBy = exports.ReserveAuctionStatus = exports.ReserveAuctionBid_OrderBy = exports.ReserveAuctionBidType = exports.OrderDirection = exports.Media_OrderBy = exports.MarketEventType = exports.InactiveReserveAuctionBid_OrderBy = exports.InactiveBid_OrderBy = exports.InactiveAsk_OrderBy = exports.Currency_OrderBy = exports.Bid_OrderBy = exports.Ask_OrderBy = void 0;
var Ask_OrderBy;
(function (Ask_OrderBy) {
    Ask_OrderBy["Id"] = "id";
    Ask_OrderBy["Media"] = "media";
    Ask_OrderBy["TransactionHash"] = "transactionHash";
    Ask_OrderBy["Currency"] = "currency";
    Ask_OrderBy["Amount"] = "amount";
    Ask_OrderBy["Owner"] = "owner";
    Ask_OrderBy["CreatedAtTimestamp"] = "createdAtTimestamp";
    Ask_OrderBy["CreatedAtBlockNumber"] = "createdAtBlockNumber";
})(Ask_OrderBy = exports.Ask_OrderBy || (exports.Ask_OrderBy = {}));
var Bid_OrderBy;
(function (Bid_OrderBy) {
    Bid_OrderBy["Id"] = "id";
    Bid_OrderBy["TransactionHash"] = "transactionHash";
    Bid_OrderBy["Media"] = "media";
    Bid_OrderBy["Currency"] = "currency";
    Bid_OrderBy["Amount"] = "amount";
    Bid_OrderBy["SellOnShare"] = "sellOnShare";
    Bid_OrderBy["Bidder"] = "bidder";
    Bid_OrderBy["Recipient"] = "recipient";
    Bid_OrderBy["CreatedAtTimestamp"] = "createdAtTimestamp";
    Bid_OrderBy["CreatedAtBlockNumber"] = "createdAtBlockNumber";
})(Bid_OrderBy = exports.Bid_OrderBy || (exports.Bid_OrderBy = {}));
var Currency_OrderBy;
(function (Currency_OrderBy) {
    Currency_OrderBy["Id"] = "id";
    Currency_OrderBy["Name"] = "name";
    Currency_OrderBy["Symbol"] = "symbol";
    Currency_OrderBy["Decimals"] = "decimals";
    Currency_OrderBy["Liquidity"] = "liquidity";
    Currency_OrderBy["ActiveBids"] = "activeBids";
    Currency_OrderBy["ActiveAsks"] = "activeAsks";
    Currency_OrderBy["InactiveBids"] = "inactiveBids";
    Currency_OrderBy["InactiveAsks"] = "inactiveAsks";
})(Currency_OrderBy = exports.Currency_OrderBy || (exports.Currency_OrderBy = {}));
var InactiveAsk_OrderBy;
(function (InactiveAsk_OrderBy) {
    InactiveAsk_OrderBy["Id"] = "id";
    InactiveAsk_OrderBy["TransactionHash"] = "transactionHash";
    InactiveAsk_OrderBy["Media"] = "media";
    InactiveAsk_OrderBy["Type"] = "type";
    InactiveAsk_OrderBy["Currency"] = "currency";
    InactiveAsk_OrderBy["Amount"] = "amount";
    InactiveAsk_OrderBy["Owner"] = "owner";
    InactiveAsk_OrderBy["CreatedAtTimestamp"] = "createdAtTimestamp";
    InactiveAsk_OrderBy["CreatedAtBlockNumber"] = "createdAtBlockNumber";
    InactiveAsk_OrderBy["InactivatedAtTimestamp"] = "inactivatedAtTimestamp";
    InactiveAsk_OrderBy["InactivatedAtBlockNumber"] = "inactivatedAtBlockNumber";
})(InactiveAsk_OrderBy = exports.InactiveAsk_OrderBy || (exports.InactiveAsk_OrderBy = {}));
var InactiveBid_OrderBy;
(function (InactiveBid_OrderBy) {
    InactiveBid_OrderBy["Id"] = "id";
    InactiveBid_OrderBy["TransactionHash"] = "transactionHash";
    InactiveBid_OrderBy["Media"] = "media";
    InactiveBid_OrderBy["Type"] = "type";
    InactiveBid_OrderBy["Currency"] = "currency";
    InactiveBid_OrderBy["Amount"] = "amount";
    InactiveBid_OrderBy["SellOnShare"] = "sellOnShare";
    InactiveBid_OrderBy["Bidder"] = "bidder";
    InactiveBid_OrderBy["Recipient"] = "recipient";
    InactiveBid_OrderBy["CreatedAtTimestamp"] = "createdAtTimestamp";
    InactiveBid_OrderBy["CreatedAtBlockNumber"] = "createdAtBlockNumber";
    InactiveBid_OrderBy["InactivatedAtTimestamp"] = "inactivatedAtTimestamp";
    InactiveBid_OrderBy["InactivatedAtBlockNumber"] = "inactivatedAtBlockNumber";
})(InactiveBid_OrderBy = exports.InactiveBid_OrderBy || (exports.InactiveBid_OrderBy = {}));
var InactiveReserveAuctionBid_OrderBy;
(function (InactiveReserveAuctionBid_OrderBy) {
    InactiveReserveAuctionBid_OrderBy["Id"] = "id";
    InactiveReserveAuctionBid_OrderBy["TransactionHash"] = "transactionHash";
    InactiveReserveAuctionBid_OrderBy["ReserveAuction"] = "reserveAuction";
    InactiveReserveAuctionBid_OrderBy["Amount"] = "amount";
    InactiveReserveAuctionBid_OrderBy["Bidder"] = "bidder";
    InactiveReserveAuctionBid_OrderBy["BidType"] = "bidType";
    InactiveReserveAuctionBid_OrderBy["BidInactivatedAtTimestamp"] = "bidInactivatedAtTimestamp";
    InactiveReserveAuctionBid_OrderBy["BidInactivatedAtBlockNumber"] = "bidInactivatedAtBlockNumber";
    InactiveReserveAuctionBid_OrderBy["CreatedAtTimestamp"] = "createdAtTimestamp";
    InactiveReserveAuctionBid_OrderBy["CreatedAtBlockNumber"] = "createdAtBlockNumber";
})(InactiveReserveAuctionBid_OrderBy = exports.InactiveReserveAuctionBid_OrderBy || (exports.InactiveReserveAuctionBid_OrderBy = {}));
/** The Types for MarketEvents (Asks, Bids) */
var MarketEventType;
(function (MarketEventType) {
    MarketEventType["Finalized"] = "Finalized";
    MarketEventType["Removed"] = "Removed";
})(MarketEventType = exports.MarketEventType || (exports.MarketEventType = {}));
var Media_OrderBy;
(function (Media_OrderBy) {
    Media_OrderBy["Id"] = "id";
    Media_OrderBy["TransactionHash"] = "transactionHash";
    Media_OrderBy["Owner"] = "owner";
    Media_OrderBy["Creator"] = "creator";
    Media_OrderBy["PrevOwner"] = "prevOwner";
    Media_OrderBy["Approved"] = "approved";
    Media_OrderBy["ContentHash"] = "contentHash";
    Media_OrderBy["MetadataHash"] = "metadataHash";
    Media_OrderBy["ContentUri"] = "contentURI";
    Media_OrderBy["MetadataUri"] = "metadataURI";
    Media_OrderBy["OwnerBidShare"] = "ownerBidShare";
    Media_OrderBy["CreatorBidShare"] = "creatorBidShare";
    Media_OrderBy["PrevOwnerBidShare"] = "prevOwnerBidShare";
    Media_OrderBy["CreatedAtTimestamp"] = "createdAtTimestamp";
    Media_OrderBy["CreatedAtBlockNumber"] = "createdAtBlockNumber";
    Media_OrderBy["BurnedAtTimeStamp"] = "burnedAtTimeStamp";
    Media_OrderBy["BurnedAtBlockNumber"] = "burnedAtBlockNumber";
    Media_OrderBy["CurrentAsk"] = "currentAsk";
    Media_OrderBy["CurrentBids"] = "currentBids";
    Media_OrderBy["InactiveAsks"] = "inactiveAsks";
    Media_OrderBy["InactiveBids"] = "inactiveBids";
    Media_OrderBy["Transfers"] = "transfers";
    Media_OrderBy["ReserveAuctions"] = "reserveAuctions";
})(Media_OrderBy = exports.Media_OrderBy || (exports.Media_OrderBy = {}));
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["Asc"] = "asc";
    OrderDirection["Desc"] = "desc";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
var ReserveAuctionBidType;
(function (ReserveAuctionBidType) {
    ReserveAuctionBidType["Active"] = "Active";
    ReserveAuctionBidType["Refunded"] = "Refunded";
    ReserveAuctionBidType["Final"] = "Final";
})(ReserveAuctionBidType = exports.ReserveAuctionBidType || (exports.ReserveAuctionBidType = {}));
var ReserveAuctionBid_OrderBy;
(function (ReserveAuctionBid_OrderBy) {
    ReserveAuctionBid_OrderBy["Id"] = "id";
    ReserveAuctionBid_OrderBy["TransactionHash"] = "transactionHash";
    ReserveAuctionBid_OrderBy["ReserveAuction"] = "reserveAuction";
    ReserveAuctionBid_OrderBy["Amount"] = "amount";
    ReserveAuctionBid_OrderBy["Bidder"] = "bidder";
    ReserveAuctionBid_OrderBy["BidType"] = "bidType";
    ReserveAuctionBid_OrderBy["CreatedAtTimestamp"] = "createdAtTimestamp";
    ReserveAuctionBid_OrderBy["CreatedAtBlockNumber"] = "createdAtBlockNumber";
})(ReserveAuctionBid_OrderBy = exports.ReserveAuctionBid_OrderBy || (exports.ReserveAuctionBid_OrderBy = {}));
var ReserveAuctionStatus;
(function (ReserveAuctionStatus) {
    ReserveAuctionStatus["Pending"] = "Pending";
    ReserveAuctionStatus["Active"] = "Active";
    ReserveAuctionStatus["Canceled"] = "Canceled";
    ReserveAuctionStatus["Finished"] = "Finished";
})(ReserveAuctionStatus = exports.ReserveAuctionStatus || (exports.ReserveAuctionStatus = {}));
var ReserveAuction_OrderBy;
(function (ReserveAuction_OrderBy) {
    ReserveAuction_OrderBy["Id"] = "id";
    ReserveAuction_OrderBy["TransactionHash"] = "transactionHash";
    ReserveAuction_OrderBy["TokenContract"] = "tokenContract";
    ReserveAuction_OrderBy["TokenId"] = "tokenId";
    ReserveAuction_OrderBy["Token"] = "token";
    ReserveAuction_OrderBy["Media"] = "media";
    ReserveAuction_OrderBy["Approved"] = "approved";
    ReserveAuction_OrderBy["Duration"] = "duration";
    ReserveAuction_OrderBy["ExpectedEndTimestamp"] = "expectedEndTimestamp";
    ReserveAuction_OrderBy["FirstBidTime"] = "firstBidTime";
    ReserveAuction_OrderBy["ReservePrice"] = "reservePrice";
    ReserveAuction_OrderBy["CuratorFeePercentage"] = "curatorFeePercentage";
    ReserveAuction_OrderBy["TokenOwner"] = "tokenOwner";
    ReserveAuction_OrderBy["Curator"] = "curator";
    ReserveAuction_OrderBy["AuctionCurrency"] = "auctionCurrency";
    ReserveAuction_OrderBy["Status"] = "status";
    ReserveAuction_OrderBy["CurrentBid"] = "currentBid";
    ReserveAuction_OrderBy["PreviousBids"] = "previousBids";
    ReserveAuction_OrderBy["ApprovedTimestamp"] = "approvedTimestamp";
    ReserveAuction_OrderBy["ApprovedBlockNumber"] = "approvedBlockNumber";
    ReserveAuction_OrderBy["CreatedAtTimestamp"] = "createdAtTimestamp";
    ReserveAuction_OrderBy["CreatedAtBlockNumber"] = "createdAtBlockNumber";
    ReserveAuction_OrderBy["FinalizedAtTimestamp"] = "finalizedAtTimestamp";
    ReserveAuction_OrderBy["FinalizedAtBlockNumber"] = "finalizedAtBlockNumber";
})(ReserveAuction_OrderBy = exports.ReserveAuction_OrderBy || (exports.ReserveAuction_OrderBy = {}));
var Transfer_OrderBy;
(function (Transfer_OrderBy) {
    Transfer_OrderBy["Id"] = "id";
    Transfer_OrderBy["TransactionHash"] = "transactionHash";
    Transfer_OrderBy["Media"] = "media";
    Transfer_OrderBy["From"] = "from";
    Transfer_OrderBy["To"] = "to";
    Transfer_OrderBy["CreatedAtTimestamp"] = "createdAtTimestamp";
    Transfer_OrderBy["CreatedAtBlockNumber"] = "createdAtBlockNumber";
})(Transfer_OrderBy = exports.Transfer_OrderBy || (exports.Transfer_OrderBy = {}));
/** The Types of URI Updates */
var UriUpdateType;
(function (UriUpdateType) {
    UriUpdateType["Content"] = "Content";
    UriUpdateType["Metadata"] = "Metadata";
})(UriUpdateType = exports.UriUpdateType || (exports.UriUpdateType = {}));
var UriUpdate_OrderBy;
(function (UriUpdate_OrderBy) {
    UriUpdate_OrderBy["Id"] = "id";
    UriUpdate_OrderBy["TransactionHash"] = "transactionHash";
    UriUpdate_OrderBy["Type"] = "type";
    UriUpdate_OrderBy["From"] = "from";
    UriUpdate_OrderBy["To"] = "to";
    UriUpdate_OrderBy["Media"] = "media";
    UriUpdate_OrderBy["Owner"] = "owner";
    UriUpdate_OrderBy["Updater"] = "updater";
    UriUpdate_OrderBy["CreatedAtTimestamp"] = "createdAtTimestamp";
    UriUpdate_OrderBy["CreatedAtBlockNumber"] = "createdAtBlockNumber";
})(UriUpdate_OrderBy = exports.UriUpdate_OrderBy || (exports.UriUpdate_OrderBy = {}));
var User_OrderBy;
(function (User_OrderBy) {
    User_OrderBy["Id"] = "id";
    User_OrderBy["AuthorizedUsers"] = "authorizedUsers";
    User_OrderBy["Collection"] = "collection";
    User_OrderBy["Creations"] = "creations";
    User_OrderBy["CurrentBids"] = "currentBids";
})(User_OrderBy = exports.User_OrderBy || (exports.User_OrderBy = {}));
var _SubgraphErrorPolicy_;
(function (_SubgraphErrorPolicy_) {
    /** Data will be returned even if the subgraph has indexing errors */
    _SubgraphErrorPolicy_["Allow"] = "allow";
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    _SubgraphErrorPolicy_["Deny"] = "deny";
})(_SubgraphErrorPolicy_ = exports._SubgraphErrorPolicy_ || (exports._SubgraphErrorPolicy_ = {}));

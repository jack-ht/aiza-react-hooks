"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformNFTIndexerResponse = void 0;
const tslib_1 = require("tslib");
const big_js_1 = (0, tslib_1.__importDefault)(require("big.js"));
const TransformFetchResults_1 = require("./TransformFetchResults");
function transformNFTIndexerResponse(data, auction, currency) {
    var _a;
    return {
        nft: {
            tokenId: data.tokenId.toString(),
            contract: {
                address: data.address,
            },
            owner: data.owner,
            creator: data.minter || undefined,
            metadataURI: data.tokenURI || '',
        },
        aizaNFT: data.media
            ? {
                // TODO(iain): make properly optional
                createdAtTimestamp: ((_a = data.mintTransferEvent) === null || _a === void 0 ? void 0 : _a.blockTimestamp) || 0,
                // TODO(iain): make properly optional
                contentURI: data.media.contentURI || '',
                contentHash: data.media.contentHash,
                // TODO(iain): make properly optional
                metadataURI: data.media.metadataURI || '',
                metadataHash: data.media.metadataHash,
                ownerBidShare: data.media.ownerBidShare,
                ownerBidSharePercentage: data.media.ownerBidShare
                    ? new big_js_1.default(data.media.ownerBidShare).div(new big_js_1.default(10).pow(18)).toNumber()
                    : 0,
                creatorBidShare: data.media.creatorBidShare,
                creatorBidSharePercentage: data.media.creatorBidShare
                    ? new big_js_1.default(data.media.creatorBidShare).div(new big_js_1.default(10).pow(18)).toNumber()
                    : 0,
            }
            : undefined,
        aizaIndexerResponse: data,
        pricing: (0, TransformFetchResults_1.addAuctionInformation)({
            reserve: (0, TransformFetchResults_1.auctionDataToPricing)(auction),
        }, currency),
    };
}
exports.transformNFTIndexerResponse = transformNFTIndexerResponse;

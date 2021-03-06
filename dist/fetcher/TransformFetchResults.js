"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAuctionInformation = exports.transformCurrencyForKey = exports.auctionDataToPricing = exports.transformMediaForKey = exports.transformMediaItem = exports.transformCurrencyEth = void 0;
const tslib_1 = require("tslib");
const big_js_1 = (0, tslib_1.__importDefault)(require("big.js"));
const FetchResultTypes_1 = require("./FetchResultTypes");
const RequestError_1 = require("./RequestError");
const AuctionInfoTypes_1 = require("./AuctionInfoTypes");
const AuctionState_1 = require("./AuctionState");
const addresses_1 = require("../constants/addresses");
const NULL_ETH_CURRENCY_ID = '0x0000000000000000000000000000000000000000';
function transformCurrencyEth(currency) {
    let updatedCurrency = { ...currency };
    if (currency.id === NULL_ETH_CURRENCY_ID) {
        updatedCurrency.decimals = 18;
        updatedCurrency.name = 'Ethereum';
        updatedCurrency.symbol = 'ETH';
    }
    if (!updatedCurrency.decimals) {
        // Assume default 18 decimals
        updatedCurrency.decimals = 18;
    }
    return updatedCurrency;
}
exports.transformCurrencyEth = transformCurrencyEth;
function transformMediaItem(media, networkId) {
    const { reserveAuctions, currentBids, currentAsk, ...nft } = media;
    // Since auctions are sorted by last created, the first auction will be the active auction
    // If the auction is not active it still will be created but will not be added to the current
    // auction information.
    let auctionData = reserveAuctions && reserveAuctions.length > 0 ? reserveAuctions[0] : undefined;
    return {
        nft: {
            tokenId: nft.id,
            contract: {
                address: addresses_1.AIZA_MEDIA_CONTRACT_BY_NETWORK[networkId],
                knownContract: FetchResultTypes_1.KNOWN_CONTRACTS.AIZA,
            },
            owner: nft.owner.id,
            creator: nft.creator.id,
            metadataURI: nft.metadataURI,
        },
        aizaNFT: {
            metadataURI: nft.metadataURI,
            metadataHash: nft.metadataHash,
            contentURI: nft.contentURI,
            contentHash: nft.contentHash,
            creatorBidShare: nft.creatorBidShare,
            createdAtTimestamp: nft.createdAtTimestamp,
            creatorBidSharePercentage: new big_js_1.default(nft.creatorBidShare)
                .div(new big_js_1.default(10).pow(18))
                .toNumber(),
            ownerBidSharePercentage: new big_js_1.default(nft.creatorBidShare) // ownerBidShare --> creatorBidShare
                .div(new big_js_1.default(10).pow(18))
                .toNumber(),
        },
        pricing: {
            perpetual: {
                bids: currentBids || [],
                ask: currentAsk || null,
            },
            reserve: auctionDataToPricing(auctionData),
        },
    };
}
exports.transformMediaItem = transformMediaItem;
function transformMediaForKey(result, key, networkId) {
    const media = result.id.find((media) => media.id === key);
    if (!media) {
        throw new RequestError_1.RequestError('No media in response');
    }
    return transformMediaItem(media, networkId);
}
exports.transformMediaForKey = transformMediaForKey;
function auctionDataToPricing(auctionData) {
    if (!auctionData) {
        return null;
    }
    return {
        ...auctionData,
        auctionCurrency: transformCurrencyEth(auctionData.auctionCurrency),
    };
}
exports.auctionDataToPricing = auctionDataToPricing;
function transformCurrencyForKey(result, key) {
    var _a, _b;
    const currency = result.tokens.find((token) => token.id === key);
    // Special case ETH
    if (key === NULL_ETH_CURRENCY_ID) {
        return {
            ethToUsd: (_a = result.bundle) === null || _a === void 0 ? void 0 : _a.ethPrice,
            token: {
                symbol: 'ETH',
                name: 'Ethereum',
                id: NULL_ETH_CURRENCY_ID,
                decimals: 18,
                derivedETH: 1,
            },
        };
    }
    if (!currency) {
        throw new RequestError_1.RequestError('No currency in response');
    }
    return {
        ethToUsd: (_b = result.bundle) === null || _b === void 0 ? void 0 : _b.ethPrice,
        token: currency,
    };
}
exports.transformCurrencyForKey = transformCurrencyForKey;
const setCurrencyDecimal = (amount, decimals) => {
    return new big_js_1.default(amount)
        .div(new big_js_1.default(10).pow(parseInt(decimals, 10) || 18))
        .toString();
};
function addAuctionInformation(pricing, currencyInfos = {}) {
    var _a, _b, _c, _d, _e, _f, _g;
    const getCurrencyComputedValue = (currencyId, bidAmount) => {
        const currencyInfo = currencyInfos[currencyId];
        if (!currencyInfo) {
            return;
        }
        const inETH = new big_js_1.default(currencyInfo.token.derivedETH)
            .mul(new big_js_1.default(bidAmount).div(new big_js_1.default(10).pow(parseInt(currencyInfo.token.decimals, 10))))
            .toString();
        return {
            inETH,
            inUSD: new big_js_1.default(inETH).mul(currencyInfo.ethToUsd).toString(),
        };
    };
    const handlePerpetualBid = (bidRaw) => {
        const { amount, currency, ...bid } = bidRaw;
        return {
            ...bid,
            pricing: {
                currency,
                amount,
                prettyAmount: setCurrencyDecimal(amount, currency.decimals),
                computedValue: getCurrencyComputedValue(currency.id, amount),
            },
        };
    };
    const getBidPricing = (amount) => {
        var _a;
        const currency = (_a = pricing.reserve) === null || _a === void 0 ? void 0 : _a.auctionCurrency;
        return {
            pricing: {
                currency,
                amount,
                prettyAmount: setCurrencyDecimal(amount, currency === null || currency === void 0 ? void 0 : currency.decimals),
                computedValue: currency
                    ? getCurrencyComputedValue(currency.id, amount)
                    : undefined,
            },
        };
    };
    const transformAskCurrency = (ask) => {
        const { amount, currency, createdAtTimestamp, id } = ask;
        return {
            createdAtTimestamp,
            id,
            pricing: {
                currency,
                amount,
                prettyAmount: setCurrencyDecimal(amount, currency.decimals),
                computedValue: getCurrencyComputedValue(currency.id, amount),
            },
        };
    };
    const getHighestReserveBid = () => {
        var _a;
        if ((_a = pricing.reserve) === null || _a === void 0 ? void 0 : _a.currentBid) {
            const { auctionCurrency, currentBid } = pricing.reserve;
            const computedValue = getCurrencyComputedValue(auctionCurrency.id, currentBid.amount);
            return {
                pricing: {
                    amount: currentBid.amount,
                    prettyAmount: setCurrencyDecimal(currentBid.amount, auctionCurrency.decimals),
                    currency: transformCurrencyEth(auctionCurrency),
                    computedValue,
                },
                placedBy: currentBid.bidder.id,
                placedAt: currentBid.createdAtTimestamp,
            };
        }
        return;
    };
    const getHighestPerpetualBid = () => {
        var _a, _b;
        const sortedBids = (_b = (_a = pricing.perpetual) === null || _a === void 0 ? void 0 : _a.bids) === null || _b === void 0 ? void 0 : _b.map((bid) => ({
            bid,
            computedValue: getCurrencyComputedValue(bid.currency.id, bid.amount),
        })).sort((a, b) => {
            if (a.computedValue && b.computedValue) {
                return new big_js_1.default(a.computedValue.inETH).sub(b.computedValue.inETH).toNumber() > 0
                    ? -1
                    : 1;
            }
            return new Date(a.bid.createdAtTimestamp).getTime() >
                new Date(b.bid.createdAtTimestamp).getTime()
                ? -1
                : 1;
        });
        if (!sortedBids || !sortedBids.length) {
            return;
        }
        return {
            pricing: {
                computedValue: sortedBids[0].computedValue,
                amount: sortedBids[0].bid.amount,
                prettyAmount: setCurrencyDecimal(sortedBids[0].bid.amount, sortedBids[0].bid.currency.decimals),
                currency: transformCurrencyEth(sortedBids[0].bid.currency),
            },
            placedBy: sortedBids[0].bid.bidder.id,
            placedAt: sortedBids[0].bid.createdAtTimestamp,
        };
    };
    const nftPricingInformation = {
        reserve: pricing.reserve
            ? {
                ...pricing.reserve,
                currentBid: (() => {
                    var _a;
                    if (!pricing.reserve.currentBid) {
                        return undefined;
                    }
                    const { amount, ...bidRaw } = (_a = pricing.reserve) === null || _a === void 0 ? void 0 : _a.currentBid;
                    return {
                        ...bidRaw,
                        ...getBidPricing(amount),
                    };
                })(),
                current: {
                    highestBid: getHighestReserveBid(),
                    likelyHasEnded: parseInt((_a = pricing.reserve) === null || _a === void 0 ? void 0 : _a.expectedEndTimestamp, 10) <
                        new Date().getTime() / 1000,
                    reserveMet: ((_b = pricing.reserve) === null || _b === void 0 ? void 0 : _b.firstBidTime) && pricing.reserve.firstBidTime !== '0',
                },
                reservePrice: {
                    currency: transformCurrencyEth({
                        id: pricing.reserve.auctionCurrency.id,
                        name: pricing.reserve.auctionCurrency.name,
                        symbol: pricing.reserve.auctionCurrency.symbol,
                        decimals: pricing.reserve.auctionCurrency.decimals,
                    }),
                    amount: pricing.reserve.reservePrice,
                    prettyAmount: setCurrencyDecimal(pricing.reserve.reservePrice, pricing.reserve.auctionCurrency.decimals),
                    computedValue: getCurrencyComputedValue(pricing.reserve.auctionCurrency.id, pricing.reserve.reservePrice),
                },
                previousBids: ((_d = (_c = pricing.reserve) === null || _c === void 0 ? void 0 : _c.previousBids) === null || _d === void 0 ? void 0 : _d.map(({ amount, ...previousBid }) => ({
                    ...previousBid,
                    ...getBidPricing(amount),
                })).sort((bidA, bidB) => bidA.bidInactivatedAtBlockNumber > bidB.bidInactivatedAtBlockNumber
                    ? -1
                    : 1)) || [],
            }
            : undefined,
        perpetual: {
            ask: ((_e = pricing.perpetual) === null || _e === void 0 ? void 0 : _e.ask)
                ? transformAskCurrency(pricing.perpetual.ask)
                : undefined,
            bids: ((_f = pricing.perpetual) === null || _f === void 0 ? void 0 : _f.bids.map((bid) => handlePerpetualBid(bid))) || [],
            highestBid: getHighestPerpetualBid(),
        },
        auctionType: ((_g = pricing.reserve) === null || _g === void 0 ? void 0 : _g.status) === 'Active'
            ? AuctionInfoTypes_1.AuctionType.RESERVE
            : pricing.perpetual
                ? AuctionInfoTypes_1.AuctionType.PERPETUAL
                : AuctionInfoTypes_1.AuctionType.NONE,
        status: AuctionState_1.AuctionStateInfo.LOADING,
    };
    nftPricingInformation.status = (0, AuctionState_1.getAuctionState)(nftPricingInformation);
    return nftPricingInformation;
}
exports.addAuctionInformation = addAuctionInformation;

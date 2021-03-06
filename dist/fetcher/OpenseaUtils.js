"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformGenericNFTForKey = exports.transformOpenseaResponse = exports.openseaDataToMetadata = void 0;
const RequestError_1 = require("./RequestError");
const TransformFetchResults_1 = require("./TransformFetchResults");
const openseaDataToMetadata = (response) => {
    return {
        name: response.openseaInfo.name,
        description: response.openseaInfo.description,
        image: response.openseaInfo.image_url,
        image_thumbnail_url: response.openseaInfo.image_thumbnail_url,
        animation_url: response.openseaInfo.animation_url,
    };
};
exports.openseaDataToMetadata = openseaDataToMetadata;
const transformOpenseaResponse = (data, auctionData, currencyData) => {
    var _a;
    return {
        nft: {
            tokenId: data.token_id,
            contract: {
                address: data.asset_contract.address,
            },
            owner: data.owner.address,
            creator: (_a = data.creator) === null || _a === void 0 ? void 0 : _a.address,
            metadataURI: data.token_metadata,
        },
        openseaInfo: data,
        pricing: (0, TransformFetchResults_1.addAuctionInformation)({
            reserve: (0, TransformFetchResults_1.auctionDataToPricing)(auctionData),
        }, currencyData),
    };
};
exports.transformOpenseaResponse = transformOpenseaResponse;
const transformGenericNFTForKey = (response, key) => {
    const [contractAddress, tokenId] = key.split(':');
    const matchedResponse = response.find((response) => response.token_id === tokenId && response.asset_contract.address === contractAddress);
    if (!matchedResponse) {
        throw new RequestError_1.RequestError('Cannot find NFT in response');
    }
    return matchedResponse;
};
exports.transformGenericNFTForKey = transformGenericNFTForKey;

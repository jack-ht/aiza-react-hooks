"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNFT = void 0;
const react_1 = require("react");
const NFTFetchContext_1 = require("../context/NFTFetchContext");
const useOpenseaNFT_1 = require("./useOpenseaNFT");
const addresses_1 = require("../constants/addresses");
const useZNFT_1 = require("./useZNFT");
const useNFTIndexer_1 = require("./useNFTIndexer");
/**
 * Fetches on-chain NFT data and pricing for the given zNFT id
 *
 * @param contractAddress address of the contract, if null and tokenID is passed in, a ZNFT is assumed
 * @param tokenId id of NFT to fetch blockchain information for
 * @param options SWR flags and an option to load currency info
 * @returns useNFTType hook results include loading, error, and chainNFT data.
 */
function useNFT(contractAddress, tokenId, options = {}) {
    const fetcher = (0, react_1.useContext)(NFTFetchContext_1.NFTFetchContext);
    if (!contractAddress) {
        contractAddress = addresses_1.AIZA_MEDIA_CONTRACT_BY_NETWORK[fetcher.networkId];
    }
    const isAizaContractAddress = contractAddress === addresses_1.AIZA_MEDIA_CONTRACT_BY_NETWORK[fetcher.networkId];
    const openseaNFT = (0, useOpenseaNFT_1.useOpenseaNFT)(!options.useBetaIndexer && !isAizaContractAddress ? contractAddress : undefined, !options.useBetaIndexer && !isAizaContractAddress ? tokenId : undefined, options);
    const betaIndexerNFT = (0, useNFTIndexer_1.useNFTIndexer)(options.useBetaIndexer ? contractAddress : undefined, options.useBetaIndexer ? tokenId : undefined, options);
    const aizaNFT = (0, useZNFT_1.useZNFT)(!options.useBetaIndexer && isAizaContractAddress ? tokenId : undefined, options);
    let data = options.useBetaIndexer
        ? betaIndexerNFT
        : isAizaContractAddress
            ? aizaNFT
            : openseaNFT;
    return {
        currencyLoaded: !!data.currencyLoaded,
        error: data.error,
        data: data.data,
    };
}
exports.useNFT = useNFT;

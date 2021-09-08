"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaFetchAgent = void 0;
const tslib_1 = require("tslib");
const dataloader_1 = (0, tslib_1.__importDefault)(require("dataloader"));
const graphql_request_1 = require("graphql-request");
const address_1 = require("@ethersproject/address");
const RequestError_1 = require("./RequestError");
const urls_1 = require("../constants/urls");
const aiza_graph_1 = require("../graph-queries/aiza-graph");
const uniswap_1 = require("../graph-queries/uniswap");
const timeouts_1 = require("../constants/timeouts");
const TransformFetchResults_1 = require("./TransformFetchResults");
const FetchWithTimeout_1 = require("./FetchWithTimeout");
const OpenseaUtils_1 = require("./OpenseaUtils");
const aiza_indexer_1 = require("../graph-queries/aiza-indexer");
/**
 * Internal agent for NFT Hooks to fetch NFT information.
 * Can be used directly for interaction with non-react web frameworks or server frameworks.
 * Uses a cached promise-based API.
 * Fetches from IPFS providers and thegraph.
 */
class MediaFetchAgent {
    constructor(network) {
        this.timeouts = timeouts_1.DEFAULT_NETWORK_TIMEOUTS_MS;
        this.networkId = network;
        this.loaders = {
            mediaLoader: new dataloader_1.default((keys) => this.fetchMediaGraph(keys), { cache: false }),
            currencyLoader: new dataloader_1.default((keys) => this.fetchCurrenciesGraph(keys), {
                cache: false,
            }),
            aizaNFTIndexerLoader: new dataloader_1.default((keys) => this.fetchAizaNFTIndexerNFTs(keys)),
            usernameLoader: new dataloader_1.default((keys) => this.fetchAizaUsernames(keys)),
            genericNFTLoader: new dataloader_1.default((keys) => this.fetchGenericNFT(keys), {
                cache: false,
                maxBatchSize: 30,
            }),
            auctionInfoLoader: new dataloader_1.default((keys) => this.fetchAuctionNFTInfo(keys), {
                cache: false,
                maxBatchSize: 300,
            }),
        };
    }
    /**
     * Clear all cached responses from metadata, currency, and NFT chain information loaders
     */
    clearCache() {
        Object.values(this.loaders).forEach((loader) => loader.clearAll());
    }
    /**
     * Gets information of currencies and trading prices from uniswap
     * @param currencies list of currency contract ids on ethereum
     * @returns Promise<CurrencyLookupType>
     */
    async loadCurrencies(currencies) {
        const results = await this.loaders.currencyLoader.loadMany(currencies);
        return results.reduce((last, result) => {
            if (!(result instanceof Error)) {
                last[result.token.id] = result;
            }
            return last;
        }, {});
    }
    /**
     * Fetch NFT content or retun URI if content shouild not be fetched
     * @param url NFT Content URL
     * @param contentType string mime type to fetch
     * @returns Promise<MediaContentType> Media content information or URL
     */
    async fetchContent(url, contentType) {
        if (contentType.startsWith('text/')) {
            try {
                const response = await new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.IPFS).fetch(url);
                return {
                    text: await response.text(),
                    type: 'text',
                    mimeType: contentType,
                };
            }
            catch (e) {
                throw new RequestError_1.RequestError('Issue fetching IPFS data');
            }
        }
        return { uri: url, type: 'uri', mimeType: contentType };
    }
    /**
     * Fetch Content MIME type from content URI
     *
     * @param url IPFS Content URI
     * @returns mime type as a string
     * @throws RequestError
     */
    async fetchContentMimeType(url) {
        const response = await new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.IPFS).fetch(url, {
            method: 'HEAD',
        });
        const header = response.headers.get('content-type');
        if (!header) {
            throw new RequestError_1.RequestError('No content type returned for URI');
        }
        return header;
    }
    /**
     * Un-batched fetch function to fetch a group of ZNFT data
     *
     * @param ids list of ids to query
     * @param type type of ids: creator, id (of media), owner
     * @returns
     */
    async fetchZNFTGroupData(ids, type) {
        const fetchWithTimeout = new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.Graph);
        const client = new graphql_request_1.GraphQLClient(urls_1.THEGRAPH_API_URL[this.networkId], {
            fetch: fetchWithTimeout.fetch,
        });
        const getQuery = () => {
            let base = {
                id_ids: [],
                creator_ids: [],
                owner_ids: [],
            };
            const idsNormalized = ids.map((id) => id.toLowerCase());
            switch (type) {
                case 'id':
                    base.id_ids = idsNormalized;
                    break;
                case 'creator':
                    base.creator_ids = idsNormalized;
                    break;
                case 'owner':
                    base.owner_ids = idsNormalized;
                    break;
            }
            return base;
        };
        const response = (await client.request(aiza_graph_1.GET_MEDIAS_QUERY, getQuery));
        const medias = [...response.creator, ...response.owner, ...response.id];
        return medias.map((media) => (0, TransformFetchResults_1.transformMediaItem)(media, this.networkId));
    }
    // Alpha: uses aiza indexer
    // format CONTRACT_ID-TOKEN_ID
    async fetchAizaNFTIndexerNFTs(keys) {
        const fetchWithTimeout = new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.AizaIndexer);
        const client = new graphql_request_1.GraphQLClient(urls_1.INDEXER_URL[this.networkId], {
            fetch: fetchWithTimeout.fetch,
        });
        const response = await client.request(aiza_indexer_1.BY_IDS, {
            ids: keys,
        });
        return keys.map((key) => response.Token.find((token) => token.id === key) ||
            new Error('Did not find token'));
    }
    async loadAizaNFTIndexerNFTUntransformed(contractAddress, tokenId) {
        return this.loaders.aizaNFTIndexerLoader.load(`${(0, address_1.getAddress)(contractAddress)}-${tokenId}`);
    }
    async loadAizaNFTIndexerNFTsUntransformed(tokenAndIds) {
        return this.loaders.aizaNFTIndexerLoader.loadMany(tokenAndIds);
    }
    /**
     * Un-batched fetch function to fetch a group of NFT data from the aiza indexer
     *
     * @param ids list of ids to query
     * @param type type of ids: creator, id (of media), owner
     * @returns
     */
    async fetchAizaIndexerGroupData({ collectionAddress, curatorAddress, limit = 120, offset = 0, }) {
        if (!collectionAddress && !curatorAddress) {
            throw new Error('Needs to have at least one curator or collector');
        }
        const fetchWithTimeout = new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.AizaIndexer);
        const client = new graphql_request_1.GraphQLClient(urls_1.INDEXER_URL[this.networkId], {
            fetch: fetchWithTimeout.fetch,
        });
        const response = await client.request(aiza_indexer_1.ACTIVE_AUCTIONS_QUERY, {
            addresses: collectionAddress ? [(0, address_1.getAddress)(collectionAddress)] : [],
            curators: curatorAddress ? [(0, address_1.getAddress)(curatorAddress)] : [],
            offset,
            limit,
        });
        return response.Token;
    }
    /**
     * Un-batched fetch function to fetch a group of NFT data from the aiza indexer
     *
     * @param ids list of ids to query
     * @param type type of ids: creator, id (of media), owner
     * @returns
     */
    async fetchAizaIndexerUserOwnedNFTs({ collectionAddress, userAddress, offset = 0, limit = 250, }) {
        const fetchWithTimeout = new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.AizaIndexer);
        const client = new graphql_request_1.GraphQLClient(urls_1.INDEXER_URL[this.networkId], {
            fetch: fetchWithTimeout.fetch,
        });
        const response = await client.request(aiza_indexer_1.BY_OWNER, {
            address: (0, address_1.getAddress)(collectionAddress),
            owner: (0, address_1.getAddress)(userAddress),
            offset,
            limit,
        });
        return response.Token;
    }
    /**
     * Get on-chain AIZA NFT ID associated media information
     *
     * @param mediaId AIZA NFT id to retrieve information of
     * @returns Promise<NFTDataType> On-chain NFT data
     */
    async loadZNFTData(mediaId, currencyInfos = {}) {
        const chainInfo = await this.loaders.mediaLoader.load(mediaId);
        if (!chainInfo) {
            throw new RequestError_1.RequestError('Cannot fetch chain information');
        }
        return {
            ...chainInfo,
            pricing: (0, TransformFetchResults_1.addAuctionInformation)(chainInfo.pricing, currencyInfos),
        };
    }
    async loadNFTData(contractAddress, tokenId, auctionData, currencyData) {
        const contractAndToken = `${contractAddress.toLowerCase()}:${tokenId}`;
        const nftInfo = await this.loaders.genericNFTLoader.load(contractAndToken);
        if (!auctionData) {
            auctionData = await this.loadAuctionInfo(contractAddress, tokenId);
        }
        if (!nftInfo) {
            throw new RequestError_1.RequestError('Cannot fetch NFT information');
        }
        return (0, OpenseaUtils_1.transformOpenseaResponse)(nftInfo, auctionData, currencyData);
    }
    async loadNFTDataUntransformed(contractAddress, tokenId) {
        const contractAndToken = `${contractAddress.toLowerCase()}:${tokenId}`;
        const nftInfo = await this.loaders.genericNFTLoader.load(contractAndToken);
        if (!nftInfo) {
            throw new RequestError_1.RequestError('Cannot fetch NFT information');
        }
        return nftInfo;
    }
    async loadZNFTDataUntransformed(mediaId) {
        return await this.loaders.mediaLoader.load(mediaId);
    }
    async loadAuctionInfo(tokenContract, tokenId) {
        return await this.loaders.auctionInfoLoader.load([tokenContract.toLowerCase(), tokenId].join('-'));
    }
    // use dash between lowercase contract id and token id
    async loadAuctionInfos(tokenContractAndIds) {
        return await this.loaders.auctionInfoLoader.loadMany(tokenContractAndIds);
    }
    /**
     *
     * @param address string address of username to load
     * @returns
     */
    async loadUsername(address) {
        return this.loaders.usernameLoader.load(address.toLowerCase());
    }
    /**
     * Fetch function to retrieve Graph data for matching curated auctions
     * This function is not cached
     *
     * @function fetchReserveAuctions
     * @private
     * @param curatorIds list of Aiza NFT IDs to fetch from the graph datastore
     * @returns mapped transformed list of curated auction results
     */
    async fetchReserveAuctions(curatorIds, isApproved = null, first = 1000, skip = 0) {
        const fetchWithTimeout = new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.Graph);
        const client = new graphql_request_1.GraphQLClient(urls_1.THEGRAPH_API_URL[this.networkId], {
            fetch: fetchWithTimeout.fetch,
        });
        let query = aiza_graph_1.GET_ALL_AUCTIONS;
        if (curatorIds.length) {
            query = aiza_graph_1.GET_AUCTION_BY_CURATOR;
        }
        const response = (await client.request(query, {
            curators: curatorIds.length ? curatorIds : undefined,
            first: first,
            skip: skip,
            approved: isApproved === null ? [true, false] : [isApproved],
        }));
        return response.reserveAuctions;
    }
    async fetchAuctionNFTInfo(tokenAndAddresses) {
        const fetchWithTimeout = new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.Graph);
        const client = new graphql_request_1.GraphQLClient(urls_1.THEGRAPH_API_URL[this.networkId], {
            fetch: fetchWithTimeout.fetch,
        });
        const response = (await client.request(aiza_graph_1.GET_AUCTION_BY_MEDIA, {
            tokens: tokenAndAddresses.map((tokenAndAddress) => tokenAndAddress.toLowerCase()),
        }));
        if (!response.reserveAuctions) {
            throw new RequestError_1.RequestError('Missing auction in reponse');
        }
        return tokenAndAddresses.map((tokenAndAddress) => response.reserveAuctions.find((auction) => auction.token === tokenAndAddress) ||
            new Error('Missing Record'));
    }
    /**
     * Internal fetch current auctions by curator
     *
     * @function fetchMediaGraph
     * @private
     * @param mediaIds list of Aiza NFT IDs to fetch from the graph datastore
     * @returns mapped transformed list of aiza NFT ID data
     */
    async fetchMediaGraph(mediaIds) {
        const fetchWithTimeout = new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.Graph);
        const client = new graphql_request_1.GraphQLClient(urls_1.THEGRAPH_API_URL[this.networkId], {
            fetch: fetchWithTimeout.fetch,
        });
        const response = (await client.request(aiza_graph_1.GET_MEDIAS_QUERY, {
            id_ids: mediaIds,
            creator_ids: [],
            owner_ids: [],
        }));
        return mediaIds.map((key) => (0, TransformFetchResults_1.transformMediaForKey)(response, key, this.networkId));
    }
    /**
     * Fetches generic NFT information
     *
     * @param nftAddresses list of addresses in a 0xcontractid:tokenid format
     * @returns
     */
    async fetchGenericNFT(nftAddresses) {
        const fetchWithTimeout = new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.OpenSea);
        const apiBase = urls_1.OPENSEA_API_URL[this.networkId];
        const urlParams = [];
        nftAddresses
            .map((address) => address.split(':'))
            .forEach(([address, tokenId]) => {
            urlParams.push(`token_ids=${tokenId}&asset_contract_addresses=${address}`);
        });
        const response = await fetchWithTimeout.fetch(`${apiBase}assets?${urlParams.join('&')}&order_direction=desc&offset=0&limit=50`);
        const responseJson = await response.json();
        return nftAddresses.map((nftAddress) => (0, OpenseaUtils_1.transformGenericNFTForKey)(responseJson.assets, nftAddress));
    }
    /**
     * Fetches aiza username information from blockchain addresses for displaying user
     * information.
     *
     * @param addresses string list of addresses to map to Aiza usernames
     * @returns list of UsernameResponseType - all fields are optional except address
     */
    async fetchAizaUsernames(addresses) {
        const fetchWithTimeout = new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.Aiza);
        const response = await fetchWithTimeout.fetch(urls_1.USERS_API_URL, {
            method: 'GET',
            type: 'cors',
            headers: {
                'content-type': 'application/json',
                'app-id': '61386f77e5536a40803d9817',
            },
            // body: JSON.stringify({ addresses }),
        });
        const usernames = (await response.json());
        return addresses.map((address) => {
            const foundUsername = usernames.find((username) => username.address.toLowerCase() === address);
            if (foundUsername) {
                return foundUsername;
            }
            return { address };
        });
    }
    /**
     * Internal fetch function to retrieve currency information from TheGraph
     *
     * @function fetchCurrenciesGraph
     * @private
     * @param currencyContracts list of Ethereum addresses of currency contract data to retrieve
     * @returns mapped transformed list of ETH currency mapping data
     */
    async fetchCurrenciesGraph(currencyContracts) {
        const fetchWithTimeout = new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.Graph);
        const client = new graphql_request_1.GraphQLClient(urls_1.THEGRAPH_UNISWAP_URL[this.networkId], {
            fetch: fetchWithTimeout.fetch,
        });
        const currencies = (await client.request(uniswap_1.GET_TOKEN_VALUES_QUERY, {
            currencyContracts,
        }));
        return currencyContracts.map((key) => (0, TransformFetchResults_1.transformCurrencyForKey)(currencies, key));
    }
    /**
     * Fetch method to query metadata from IPFS. Not cached
     *
     * @function fetchIPFSMetadataCached
     * @public
     * @param url Metadata Source
     * @returns IPFS Metadata Fetch
     * @throws RequestError
     */
    async fetchIPFSMetadata(url) {
        // TODO(iain): Properly parse metadata from `jack-ht/media-metadata-schemas
        const request = await new FetchWithTimeout_1.FetchWithTimeout(this.timeouts.IPFS, 'application/json').fetch(url);
        try {
            return await request.json();
        }
        catch (e) {
            throw new RequestError_1.RequestError('Cannot read JSON metadata from IPFS');
        }
    }
}
exports.MediaFetchAgent = MediaFetchAgent;

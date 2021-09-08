"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERS_API_URL = exports.OPENSEA_API_URL = exports.THEGRAPH_UNISWAP_URL = exports.INDEXER_URL = exports.THEGRAPH_API_URL = void 0;
const networks_1 = require("./networks");
exports.THEGRAPH_API_URL = {
    [networks_1.Networks.MAINNET]: 'https://api.studio.thegraph.com/query/7550/aiza/v0.0.3',
    [networks_1.Networks.RINKEBY]: 'https://api.studio.thegraph.com/query/7550/aiza/v0.0.3',
};
exports.INDEXER_URL = {
    [networks_1.Networks.MAINNET]: 'https://indexer.aiza.io/v1/graphql',
    [networks_1.Networks.RINKEBY]: 'https://indexer-dev.aiza.io/v1/graphql',
};
exports.THEGRAPH_UNISWAP_URL = {
    [networks_1.Networks.MAINNET]: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
    [networks_1.Networks.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v2-rinkeby',
};
exports.OPENSEA_API_URL = {
    [networks_1.Networks.MAINNET]: 'https://api.opensea.io/api/v1/',
    [networks_1.Networks.RINKEBY]: 'https://rinkeby-api.opensea.io/api/v1/',
};
exports.USERS_API_URL = 'https://dummyapi.io/data/v1/user?limit=10';

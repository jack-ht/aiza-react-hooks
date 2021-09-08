"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAizaUsername = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const swr_1 = (0, tslib_1.__importDefault)(require("swr"));
const NFTFetchContext_1 = require("../context/NFTFetchContext");
/**
 * useAizaUsername - Load aiza username for pretty display
 *
 * @param address string address to fetch aiza username of
 * @returns UsernameResponseType
 */
function useAizaUsername(address, options) {
    const fetcher = (0, react_1.useContext)(NFTFetchContext_1.NFTFetchContext);
    const { error, data } = (0, swr_1.default)(['loadUsername', address], (_, address) => fetcher.loadUsername(address), options);
    return { error, username: data };
}
exports.useAizaUsername = useAizaUsername;

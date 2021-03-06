"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTFetchConfiguration = exports.NFTFetchContext = exports.defaultFetchAgent = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = (0, tslib_1.__importStar)(require("react"));
const networks_1 = require("../constants/networks");
const MediaFetchAgent_1 = require("../fetcher/MediaFetchAgent");
exports.defaultFetchAgent = new MediaFetchAgent_1.MediaFetchAgent(networks_1.Networks.MAINNET);
exports.NFTFetchContext = react_1.default.createContext(exports.defaultFetchAgent);
const NFTFetchConfiguration = ({ networkId, children, }) => {
    const lastFetchContext = (0, react_1.useContext)(exports.NFTFetchContext);
    const fetchAgent = (0, react_1.useMemo)(() => {
        if (lastFetchContext.networkId === networkId) {
            return lastFetchContext;
        }
        return new MediaFetchAgent_1.MediaFetchAgent(networkId);
    }, [networkId]);
    return ((0, jsx_runtime_1.jsx)(exports.NFTFetchContext.Provider, Object.assign({ value: fetchAgent }, { children: children }), void 0));
};
exports.NFTFetchConfiguration = NFTFetchConfiguration;

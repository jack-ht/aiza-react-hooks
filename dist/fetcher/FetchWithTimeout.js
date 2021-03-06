"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchWithTimeout = void 0;
const tslib_1 = require("tslib");
const cross_fetch_1 = (0, tslib_1.__importDefault)(require("cross-fetch"));
const node_abort_controller_1 = (0, tslib_1.__importDefault)(require("node-abort-controller"));
const RequestError_1 = require("./RequestError");
/**
 * Simple Fetch wrapper that enables a timeout.
 * Allows for showing an error state for slow-to-load IPFS files
 */
class FetchWithTimeout {
    constructor(timeoutDuration = 5000, contentType = undefined) {
        this.controller = new node_abort_controller_1.default();
        this.expectedContentType = contentType;
        this.timeoutDuration = timeoutDuration;
        // Bind context to class
        this.fetch = this.fetch.bind(this);
    }
    async fetch(url, options = {}) {
        var _a;
        const controller = this.controller;
        const response = await (0, cross_fetch_1.default)(url, {
            ...options,
            signal: this.controller.signal,
        });
        setTimeout(() => controller.abort(), this.timeoutDuration);
        if (response.status !== 200) {
            throw new RequestError_1.RequestError(`Request Status = ${response.status}`);
        }
        if (this.expectedContentType &&
            !((_a = response.headers.get('content-type')) === null || _a === void 0 ? void 0 : _a.startsWith(this.expectedContentType))) {
            throw new RequestError_1.RequestError('Reponse Content Type incorrect');
        }
        return response;
    }
}
exports.FetchWithTimeout = FetchWithTimeout;

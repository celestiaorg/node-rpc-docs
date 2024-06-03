"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var batchIdCount = 0;
// checks if the passed string is a JSON-RPC request or response
var isJsonRpc = function (str) {
    try {
        var json = JSON.parse(str);
        if (json) {
            // Currently on returns batched request if all items are JSONRPC calls
            if (json.length > 0) {
                for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                    var obj = json_1[_i];
                    if (!("jsonrpc" in obj)) {
                        return false;
                    }
                }
                return true;
            }
            else if ("jsonrpc" in json) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }
    catch (e) {
        return false;
    }
};
var useWebRequest = function () {
    var _a = (0, react_1.useState)([]), history = _a[0], setHistory = _a[1];
    var listener = function (request) {
        var _a;
        var requestBody = (_a = request.request.postData) === null || _a === void 0 ? void 0 : _a.text;
        request.getContent(function (responseBody) {
            if (request.request && request.request.url && requestBody
                && isJsonRpc(requestBody) && isJsonRpc(responseBody)) {
                var requestBodyObj = JSON.parse(requestBody);
                var requestObjs_1 = [];
                var responseObjs_1 = [];
                // if batched
                if (requestBodyObj.length) {
                    for (var _i = 0, requestBodyObj_1 = requestBodyObj; _i < requestBodyObj_1.length; _i++) {
                        var reqObj = requestBodyObj_1[_i][0];
                        requestObjs_1.push({
                            type: "request",
                            method: reqObj.method,
                            timestamp: new Date(request.startedDateTime),
                            payload: reqObj,
                            batchId: batchIdCount,
                        });
                    }
                    batchIdCount += 1;
                }
                else {
                    requestObjs_1.push({
                        type: "request",
                        method: requestBodyObj.method,
                        timestamp: new Date(request.startedDateTime),
                        payload: requestBodyObj,
                    });
                }
                var responseTime = new Date(request.startedDateTime);
                var responseBodyObj = JSON.parse(responseBody);
                responseTime.setMilliseconds((responseTime.getMilliseconds() + request.time));
                // if batched
                if (responseBodyObj.length) {
                    for (var _a = 0, responseBodyObj_1 = responseBodyObj; _a < responseBodyObj_1.length; _a++) {
                        var _b = responseBodyObj_1[_a], j = _b[0], resObj = _b[1];
                        responseObjs_1.push({
                            type: "response",
                            method: requestBodyObj[j].method,
                            timestamp: responseTime,
                            payload: resObj,
                            batchId: batchIdCount,
                        });
                    }
                    batchIdCount += 1;
                }
                else {
                    responseObjs_1.push({
                        type: "response",
                        method: requestBodyObj.method,
                        timestamp: responseTime,
                        payload: responseBodyObj,
                    });
                }
                setHistory(function (prevHistory) { return __spreadArray(__spreadArray(__spreadArray([], prevHistory, true), requestObjs_1, true), responseObjs_1, true); });
            }
        });
    };
    (0, react_1.useEffect)(function () {
        if (chrome && chrome.webRequest) {
            chrome.devtools.network.onRequestFinished.addListener(listener);
        }
        return function cleanup() {
            if (chrome && chrome.webRequest) {
                chrome.devtools.network.onRequestFinished.removeListener(listener);
            }
        };
    }, []);
    return [history, setHistory];
};
exports.default = useWebRequest;

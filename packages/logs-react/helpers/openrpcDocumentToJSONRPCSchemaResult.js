"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var schema = {
    type: "object",
    properties: {
        jsonrpc: {
            type: "string",
            description: "JSON-RPC Version String",
            const: "2.0",
        },
        id: {
            oneOf: [
                {
                    type: "string",
                },
                {
                    type: "number",
                },
            ],
        },
    },
};
var openrpcDocumentToJSONRPCSchemaResult = function (methodName, openrpcDocument) {
    var methodObject = openrpcDocument.methods.find(function (method) { return method.name === methodName; });
    var methodSchema;
    if (methodObject !== undefined && methodObject.result !== undefined) {
        methodSchema = methodObject.result.schema;
    }
    return {
        type: "object",
        properties: {
            id: __assign({}, schema.properties.id),
            jsonrpc: __assign({}, schema.properties.jsonrpc),
            result: __assign(__assign({}, methodSchema), { markdownDescription: (methodObject === null || methodObject === void 0 ? void 0 : methodObject.description) || (methodObject === null || methodObject === void 0 ? void 0 : methodObject.summary), description: (methodObject === null || methodObject === void 0 ? void 0 : methodObject.description) || (methodObject === null || methodObject === void 0 ? void 0 : methodObject.summary) }),
        },
    };
};
exports.default = openrpcDocumentToJSONRPCSchemaResult;

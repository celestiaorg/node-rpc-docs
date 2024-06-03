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
            enum: ["2.0"],
            description: "JSON-RPC version string",
        },
        id: {
            description: "unique identifier for the JSON-RPC request",
            oneOf: [
                {
                    type: "string",
                },
                {
                    type: "number",
                },
            ],
        },
        method: {
            type: "string",
        },
    },
};
var openrpcDocumentToJSONRPCSchema = function (openrpcDocument) {
    return {
        type: "object",
        properties: {
            id: __assign({}, schema.properties.id),
            jsonrpc: __assign({}, schema.properties.jsonrpc),
            method: {
                type: "string",
                oneOf: openrpcDocument &&
                    openrpcDocument.methods &&
                    openrpcDocument.methods.map(function (method_a) {
                        var method = method_a;
                        return {
                            const: method.name,
                            description: method.description || method.summary,
                            markdownDescription: method.description || method.summary,
                        };
                    }),
            },
        },
        allOf: openrpcDocument &&
            openrpcDocument.methods &&
            openrpcDocument.methods.map(function (methoda) {
                var method = methoda;
                return {
                    if: {
                        properties: {
                            method: {
                                const: method.name,
                            },
                        },
                    },
                    then: {
                        properties: {
                            params: {
                                oneOf: [
                                    {
                                        type: "array",
                                        minItems: method.params &&
                                            method.params.filter(function (param) { return param.required; })
                                                .length,
                                        maxItems: method.params && method.params.length,
                                        defaultSnippets: method.examples
                                            ? method.examples.map(function (example) {
                                                return {
                                                    label: example.name,
                                                    description: example.description || example.summary,
                                                    body: example.params &&
                                                        example.params.map(function (ex) { return ex.value; }),
                                                };
                                            })
                                            : [],
                                        items: method.params &&
                                            method.params.map(function (param) {
                                                return __assign(__assign({}, param.schema), { markdownDescription: param.description || param.summary, description: param.description || param.summary, additionalProperties: false });
                                            }),
                                    },
                                    {
                                        type: "object",
                                        properties: method.params &&
                                            method.params.reduce(function (memo, param) {
                                                if (typeof param.schema === "object") {
                                                    memo[param.name] = __assign(__assign({}, param.schema), { markdownDescription: param.description || param.summary, description: param.description || param.summary, additionalProperties: false });
                                                }
                                                else {
                                                    memo[param.name] = param.schema;
                                                }
                                                return memo;
                                            }, {}),
                                    },
                                ],
                            },
                        },
                    },
                };
            }),
    };
};
exports.default = openrpcDocumentToJSONRPCSchema;

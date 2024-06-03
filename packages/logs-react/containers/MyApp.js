"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core"); //tslint:disable-line
var useMediaQuery_1 = __importDefault(require("@material-ui/core/useMediaQuery"));
var theme_1 = __importDefault(require("../themes/theme"));
//import "./MyApp.css";
var logsReact_1 = __importDefault(require("../components/logsReact/logsReact"));
var useWebRequest_1 = __importDefault(require("../hooks/useWebRequest"));
var monaco = __importStar(require("monaco-editor"));
var MyApp = function () {
    var _a = (0, useWebRequest_1.default)(), newHistory = _a[0], setHistory = _a[1];
    var prefersDarkMode = (0, useMediaQuery_1.default)("(prefers-color-scheme: dark)");
    var theme = react_1.default.useMemo(function () { return (0, theme_1.default)(prefersDarkMode); }, [prefersDarkMode]);
    (0, react_1.useEffect)(function () {
        var t = prefersDarkMode ? "vs-dark" : "vs";
        monaco.editor.setTheme(t);
    }, [prefersDarkMode, theme]);
    (0, react_1.useEffect)(function () {
        if (chrome && chrome.devtools && chrome.devtools.panels) {
            // Create devtools panel for JSONRPCLogger extension
            chrome.devtools.panels.create("JSONRPCLogger", "", "index.html", function (panel) { return; });
        }
        else {
            var logs = [
                {
                    timestamp: new Date(),
                    type: "request",
                    method: "foo",
                    payload: {
                        jsonrpc: "2.0",
                        method: "foo",
                    },
                },
                {
                    timestamp: new Date(),
                    type: "request",
                    method: "foo",
                    payload: {
                        jsonrpc: "2.0",
                        method: "foo",
                    },
                },
                {
                    timestamp: new Date(),
                    type: "response",
                    method: "foo",
                    payload: {
                        jsonrpc: "2.0",
                        error: {
                            code: 1234,
                            message: "potato",
                        },
                    },
                },
                {
                    timestamp: new Date(),
                    type: "request",
                    method: "foo",
                    payload: {
                        jsonrpc: "2.0",
                        method: "foo",
                    },
                },
                {
                    timestamp: new Date(),
                    type: "response",
                    method: "foo",
                    payload: {
                        jsonrpc: "2.0",
                        result: "bar",
                    },
                },
                {
                    timestamp: new Date(),
                    type: "request",
                    method: "foo",
                    payload: {
                        jsonrpc: "2.0",
                        method: "foo",
                    },
                },
                {
                    timestamp: new Date(),
                    type: "request",
                    method: "potato",
                    payload: {
                        jsonrpc: "2.0",
                        method: "potato",
                    },
                },
                {
                    timestamp: new Date(),
                    type: "response",
                    method: "longPotato",
                    payload: {
                        jsonrpc: "2.0",
                        result: {
                            foo: "bar",
                            baz: "foo",
                            bar: "baz",
                            listOfNothings: [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                            ],
                        },
                    },
                },
                {
                    timestamp: new Date(),
                    type: "request",
                    notification: true,
                    method: "potato2",
                    payload: {
                        jsonrpc: "2.0",
                        method: "potato2",
                    },
                },
                {
                    timestamp: new Date(),
                    type: "response",
                    notification: true,
                    method: "potato2",
                    payload: {
                        jsonrpc: "2.0",
                        method: "potato2",
                    },
                },
            ];
            setHistory(logs);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // do not render monaco if collapsed -> see docs
    return (react_1.default.createElement(core_1.MuiThemeProvider, { theme: theme },
        react_1.default.createElement("div", null,
            react_1.default.createElement(core_1.CssBaseline, null),
            react_1.default.createElement(logsReact_1.default, { logs: newHistory, sidebarAlign: "right", openrpcDocument: {
                    methods: [
                        {
                            name: "foo",
                            description: "potato",
                        },
                    ],
                } }))));
};
exports.default = MyApp;

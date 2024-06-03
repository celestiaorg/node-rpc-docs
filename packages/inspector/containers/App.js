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
//@ts-nocheck
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var openrpcTheme_1 = require("../themes/openrpcTheme");
var use_dark_mode_1 = __importDefault(require("use-dark-mode"));
var Inspector_1 = __importDefault(require("./Inspector"));
var useQueryParams_1 = __importDefault(require("../hooks/useQueryParams"));
var monaco = __importStar(require("monaco-editor"));
var useOpenrpcDocument_1 = __importDefault(require("../hooks/useOpenrpcDocument"));
var App = function () {
    var darkMode = (0, use_dark_mode_1.default)();
    var query = (0, useQueryParams_1.default)()[0];
    var theme = darkMode.value ? openrpcTheme_1.darkTheme : openrpcTheme_1.lightTheme;
    var openrpcDocument = (0, useOpenrpcDocument_1.default)(query.openrpcDocument, query.schemaUrl);
    (0, react_1.useEffect)(function () {
        var t = darkMode.value ? "vs-dark" : "vs";
        monaco.editor.setTheme(t);
    }, [darkMode.value]);
    return (react_1.default.createElement(core_2.MuiThemeProvider, { theme: theme },
        react_1.default.createElement(core_1.CssBaseline, null),
        react_1.default.createElement(Inspector_1.default, { onToggleDarkMode: darkMode.toggle, darkMode: darkMode.value, customTransport: query.customTransport, transport: query.transport, url: query.url, openrpcDocument: openrpcDocument, request: query.request })));
};
exports.default = App;

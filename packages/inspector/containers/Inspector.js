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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = __importStar(require("react"));
var react_split_pane_1 = __importDefault(require("react-split-pane"));
var JSONRPCRequestEditor_1 = __importDefault(require("./JSONRPCRequestEditor"));
var PlayCircleFilled_1 = __importDefault(require("@material-ui/icons/PlayCircleFilled"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var FlashOn_1 = __importDefault(require("@material-ui/icons/FlashOn"));
var FlashOff_1 = __importDefault(require("@material-ui/icons/FlashOff"));
var History_1 = __importDefault(require("@material-ui/icons/History"));
var Keyboard_1 = __importDefault(require("@material-ui/icons/Keyboard"));
var react_2 = __importDefault(require("@monaco-editor/react"));
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var Description_1 = __importDefault(require("@material-ui/icons/Description"));
var core_1 = require("@material-ui/core");
var use_persisted_state_1 = __importDefault(require("use-persisted-state"));
var Brightness3_1 = __importDefault(require("@material-ui/icons/Brightness3"));
var WbSunny_1 = __importDefault(require("@material-ui/icons/WbSunny"));
var useTabs_1 = __importDefault(require("../hooks/useTabs"));
var use_debounce_1 = require("use-debounce");
var colors_1 = require("@material-ui/core/colors");
var schema_utils_js_1 = require("@open-rpc/schema-utils-js");
var TransportDropdown_1 = __importDefault(require("../components/TransportDropdown"));
var useTransport_1 = __importDefault(require("../hooks/useTransport"));
var logs_react_1 = __importDefault(require("@open-rpc/logs-react"));
var OptionsEditor_1 = __importDefault(require("./OptionsEditor"));
var useCustomTransportList = (0, use_persisted_state_1.default)("inspector-custom-transports");
var defaultTransports = [
    {
        type: "http",
        name: "HTTP",
        schema: {
            type: "object",
            properties: {
                headers: {
                    patternProperties: {
                        "": {
                            type: "string",
                        },
                    },
                },
                credentials: {
                    type: "string",
                    enum: ["omit", "same-origin", "include"],
                },
            },
            examples: [
                {
                    headers: {},
                },
            ],
        },
    },
    {
        type: "websocket",
        name: "WebSocket",
    },
    {
        type: "postmessagewindow",
        name: "PostMessageWindow",
    },
    {
        type: "postmessageiframe",
        name: "PostMessageIframe",
    },
];
var errorToJSON = function (error, id) {
    var isError = error instanceof Error;
    if (!isError) {
        return;
    }
    if (!error) {
        return;
    }
    var emptyErrorResponse = {
        jsonrpc: "2.0",
        id: id,
    };
    // this is an internal wrapped client-js error
    if (error.data instanceof Error) {
        return __assign(__assign({}, emptyErrorResponse), { error: {
                code: error.data.code,
                message: error.data.message,
                data: error.data.data,
            } });
    }
    return __assign(__assign({}, emptyErrorResponse), { error: {
            code: error.code,
            message: error.message,
            data: error.data,
        } });
};
var emptyJSONRPC = {
    jsonrpc: "2.0",
    method: "",
    params: [],
    id: 0,
};
var Inspector = function (props) {
    var _a = (0, useTabs_1.default)([
        {
            name: props.request ? props.request.method : "New Tab",
            content: props.request || __assign({}, emptyJSONRPC),
            logs: [],
            url: props.url || "",
            openrpcDocument: props.openrpcDocument,
        },
    ]), setTabContent = _a.setTabContent, setTabEditing = _a.setTabEditing, setTabIndex = _a.setTabIndex, tabs = _a.tabs, setTabs = _a.setTabs, handleClose = _a.handleClose, tabIndex = _a.tabIndex, setTabOpenRPCDocument = _a.setTabOpenRPCDocument, setTabUrl = _a.setTabUrl, handleLabelChange = _a.handleLabelChange, setTabLogs = _a.setTabLogs;
    var _b = (0, react_1.useState)(props.openrpcDocument), openrpcDocument = _b[0], setOpenRpcDocument = _b[1];
    var _c = (0, react_1.useState)(props.request || {
        jsonrpc: "2.0",
        method: "",
        params: [],
        id: 0,
    }), json = _c[0], setJson = _c[1];
    var _d = useCustomTransportList(function () {
        if (props.customTransport) {
            return __spreadArray(__spreadArray([], defaultTransports, true), [props.customTransport], false);
        }
        return defaultTransports;
    }), transportList = _d[0], setTransportList = _d[1];
    var _e = (0, react_1.useState)(props.url || ""), url = _e[0], setUrl = _e[1];
    var debouncedUrl = (0, use_debounce_1.useDebounce)(url, 1000)[0];
    var _f = (0, react_1.useState)(props.customTransport || defaultTransports[0]), selectedTransport = _f[0], setSelectedTransport = _f[1];
    var _g = (0, react_1.useState)(), transportOptions = _g[0], setTransportOptions = _g[1];
    var debouncedtransportOptions = (0, use_debounce_1.useDebounce)(transportOptions, 1000)[0];
    var _h = (0, useTransport_1.default)(transportList, debouncedUrl, props.customTransport || defaultTransports[0], debouncedtransportOptions), transport = _h[0], setTransport = _h[1], connected = _h[3];
    var _j = (0, react_1.useState)(false), historyOpen = _j[0], setHistoryOpen = _j[1];
    var _k = (0, react_1.useState)([]), requestHistory = _k[0], setRequestHistory = _k[1];
    var _l = (0, react_1.useState)(0), historySelectedIndex = _l[0], setHistorySelectedIndex = _l[1];
    var _m = (0, react_1.useState)([]), logs = _m[0], setLogs = _m[1];
    (0, react_1.useEffect)(function () {
        setTabs(__spreadArray(__spreadArray([], tabs, true), [
            {
                name: props.request ? props.request.method || "New Tab" : "New Tab",
                content: props.request,
                url: props.url,
                openrpcDocument: openrpcDocument,
            },
        ], false));
        setTabIndex(tabs.length);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.request]);
    (0, react_1.useEffect)(function () {
        if (selectedTransport !== undefined) {
            setTransport(selectedTransport);
            var s = selectedTransport;
            if (s.schema !== undefined && s.schema !== true && s.schema !== false) {
                setTransportOptions(s.schema.examples[0]);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTransport]);
    (0, react_1.useEffect)(function () {
        if (json) {
            setTabContent(tabIndex, json);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [json]);
    (0, react_1.useEffect)(function () {
        if (props.transport) {
            var t = transportList.find(function (tp) { var _a, _b; return ((_a = tp.name) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === ((_b = props.transport) === null || _b === void 0 ? void 0 : _b.toLowerCase()); });
            if (t) {
                setSelectedTransport(t);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.transport]);
    (0, react_1.useEffect)(function () {
        if (props.url) {
            setUrl(props.url);
            setTabUrl(tabIndex, props.url);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.url]);
    var handlePlayButton = function () { return __awaiter(void 0, void 0, void 0, function () {
        var requestTimestamp, result, responseTimestamp, r, reqObj_1, resObj_1, newHistory, e_1, responseTimestamp, convertedError, reqObj_2, resObj_2, newHistory;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestTimestamp = new Date();
                    if (!transport) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    requestTimestamp = new Date();
                    return [4 /*yield*/, transport.sendData({
                            internalID: json.id,
                            request: json,
                        })];
                case 2:
                    result = _a.sent();
                    responseTimestamp = new Date();
                    r = { jsonrpc: "2.0", result: result, id: json.id };
                    reqObj_1 = {
                        type: "request",
                        method: json.method,
                        timestamp: requestTimestamp,
                        payload: json,
                    };
                    resObj_1 = {
                        type: "response",
                        method: json.method,
                        timestamp: responseTimestamp,
                        payload: r,
                    };
                    newHistory = __spreadArray(__spreadArray([], requestHistory, true), [__assign({}, tabs[tabIndex])], false);
                    setRequestHistory(newHistory);
                    setLogs(function (prevLogs) { return __spreadArray(__spreadArray([], prevLogs, true), [reqObj_1, resObj_1], false); });
                    setTabLogs(tabIndex, __spreadArray(__spreadArray([], (tabs[tabIndex].logs || []), true), [reqObj_1, resObj_1], false));
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    responseTimestamp = new Date();
                    convertedError = errorToJSON(e_1, json.id);
                    reqObj_2 = {
                        type: "request",
                        method: json.method,
                        timestamp: requestTimestamp,
                        payload: json,
                    };
                    resObj_2 = {
                        type: "response",
                        method: json.method,
                        timestamp: responseTimestamp,
                        payload: convertedError,
                    };
                    newHistory = __spreadArray(__spreadArray([], requestHistory, true), [__assign({}, tabs[tabIndex])], false);
                    setRequestHistory(newHistory);
                    setLogs(function (prevLogs) { return __spreadArray(__spreadArray([], prevLogs, true), [reqObj_2, resObj_2], false); });
                    setTabLogs(tabIndex, __spreadArray(__spreadArray([], (tabs[tabIndex].logs || []), true), [reqObj_2, resObj_2], false));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var clear = function () {
        setLogs([]);
        setTabLogs(tabIndex, []);
    };
    var handleClearButton = function () {
        clear();
    };
    var handleToggleDarkMode = function () {
        if (props.onToggleDarkMode) {
            props.onToggleDarkMode();
        }
    };
    var refreshOpenRpcDocument = function () { return __awaiter(void 0, void 0, void 0, function () {
        var d, doc, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, (transport === null || transport === void 0 ? void 0 : transport.sendData({
                            internalID: 999999,
                            request: {
                                jsonrpc: "2.0",
                                params: [],
                                id: 999999,
                                method: "rpc.discover",
                            },
                        }))];
                case 1:
                    d = _a.sent();
                    return [4 /*yield*/, (0, schema_utils_js_1.parseOpenRPCDocument)(d)];
                case 2:
                    doc = _a.sent();
                    setOpenRpcDocument(doc);
                    setTabOpenRPCDocument(tabIndex, doc);
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    if (!props.openrpcDocument) {
                        setOpenRpcDocument(undefined);
                        setTabOpenRPCDocument(tabIndex, undefined);
                    }
                    return [3 /*break*/, 4];
                case 4:
                    if (transport) {
                        transport.subscribe("notification", function (notification) {
                            var responseTimestamp = new Date();
                            var notificationObj = {
                                type: "response",
                                notification: true,
                                method: notification.method,
                                timestamp: responseTimestamp,
                                payload: notification,
                            };
                            setLogs(function (prevLogs) { return __spreadArray(__spreadArray([], prevLogs, true), [notificationObj], false); });
                            setTabLogs(tabIndex, __spreadArray(__spreadArray([], (tabs[tabIndex].logs || []), true), [notificationObj], false));
                        });
                        transport.subscribe("error", function (error) {
                            var responseTimestamp = new Date();
                            var notificationObj = {
                                type: "response",
                                method: "",
                                timestamp: responseTimestamp,
                                payload: errorToJSON(error, null),
                            };
                            setLogs(function (prevLogs) { return __spreadArray(__spreadArray([], prevLogs, true), [notificationObj], false); });
                            setTabLogs(tabIndex, __spreadArray(__spreadArray([], (tabs[tabIndex].logs || []), true), [notificationObj], false));
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (!props.openrpcDocument) {
            setOpenRpcDocument(undefined);
        }
        refreshOpenRpcDocument();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transport, tabIndex]);
    (0, react_1.useEffect)(function () {
        if (tabs[tabIndex]) {
            setJson(tabs[tabIndex].content);
            setUrl(tabs[tabIndex].url || "");
            setLogs(tabs[tabIndex].logs || []);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tabIndex]);
    (0, react_1.useEffect)(function () {
        setOpenRpcDocument(props.openrpcDocument);
        setTabOpenRPCDocument(tabIndex, props.openrpcDocument);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.openrpcDocument]);
    (0, react_1.useEffect)(function () {
        if (!historyOpen) {
            handlePlayButton();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [historyOpen]);
    var handleTabIndexChange = function (event, newValue) {
        setTabIndex(newValue);
    };
    var onHistoryPlayClick = function () {
        if (requestHistory[historySelectedIndex]) {
            setJson(requestHistory[historySelectedIndex].content);
            setUrl(requestHistory[historySelectedIndex].url);
            setOpenRpcDocument(requestHistory[historySelectedIndex].openrpcDocument);
            setHistoryOpen(false);
        }
    };
    var handleTransportOptionsChange = function (optionsString) {
        try {
            setTransportOptions(JSON.parse(optionsString));
        }
        catch (e) {
            // cannot parse transport options
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Dialog, { onClose: function () { return setHistoryOpen(false); }, "aria-labelledby": "simple-dialog-title", open: historyOpen },
            react_1.default.createElement(core_1.Container, { maxWidth: "sm" },
                react_1.default.createElement(core_1.Grid, { container: true, justify: "space-between", alignItems: "center", style: {
                        padding: "30px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                    } },
                    react_1.default.createElement(core_1.Typography, { color: "textPrimary" }, "History"),
                    requestHistory.length === 0 ? null : (react_1.default.createElement(core_1.Tooltip, { title: "Use" },
                        react_1.default.createElement(core_1.IconButton, { onClick: onHistoryPlayClick },
                            react_1.default.createElement(PlayCircleFilled_1.default, null))))),
                requestHistory.length === 0 ? (react_1.default.createElement(core_1.Typography, { style: { padding: "30px" } }, "No History Yet.")) : (react_1.default.createElement(core_1.Grid, { container: true, style: { paddingBottom: "30px" } },
                    react_1.default.createElement(core_1.List, { style: {
                            padding: "10px",
                            overflowY: "scroll",
                            height: "250px",
                            width: "200px",
                        } }, requestHistory.map(function (requestHistoryItem, historyIndex) { return (react_1.default.createElement(core_1.ListItem, { button: true, onClick: function () { return setHistorySelectedIndex(historyIndex); }, selected: historyIndex === historySelectedIndex, key: historyIndex },
                        react_1.default.createElement(core_1.ListItemText, { primary: requestHistoryItem.content.method || "Empty Method", secondary: requestHistoryItem.url || "Empty Url" }))); })),
                    react_1.default.createElement(react_2.default, { width: "300px", height: "250px", value: requestHistory[historySelectedIndex]
                            ? JSON.stringify(requestHistory[historySelectedIndex].content, null, 4)
                            : "", language: "json" }))))),
        react_1.default.createElement("div", { style: { position: "relative" } },
            react_1.default.createElement(core_1.Tabs, { style: { background: "transparent" }, value: tabIndex, variant: "scrollable", indicatorColor: "primary", onChange: handleTabIndexChange },
                tabs.map(function (tab, index) { return (react_1.default.createElement(core_1.Tab, { disableRipple: true, key: index, style: {
                        border: "none",
                        outline: "none",
                        userSelect: "none",
                    }, onDoubleClick: function () { return setTabEditing(tab, true); }, label: react_1.default.createElement("div", { style: { userSelect: "none" } },
                        tab.editing ? (react_1.default.createElement(core_1.InputBase, { value: tab.name, onChange: function (ev) { return handleLabelChange(ev, tab); }, onBlur: function () { return setTabEditing(tab, false); }, autoFocus: true, style: { maxWidth: "80px", marginRight: "25px" } })) : (react_1.default.createElement(core_1.Typography, { style: {
                                display: "inline",
                                textTransform: "none",
                                marginRight: "25px",
                            }, variant: "body1" }, tab.name)),
                        tabIndex === index ? (react_1.default.createElement(core_1.Tooltip, { title: "Close Tab" },
                            react_1.default.createElement(core_1.IconButton, { onClick: function (ev) { return handleClose(ev, index); }, style: {
                                    position: "absolute",
                                    right: "10px",
                                    top: "25%",
                                }, size: "small" },
                                react_1.default.createElement(Close_1.default, null)))) : null) })); }),
                react_1.default.createElement(core_1.Tab, { disableRipple: true, style: { minWidth: "50px" }, label: react_1.default.createElement(core_1.Tooltip, { title: "Create New Tab" },
                        react_1.default.createElement(core_1.IconButton, { onClick: function () {
                                return setTabs(__spreadArray(__spreadArray([], tabs, true), [
                                    {
                                        name: "New Tab",
                                        content: __assign(__assign({}, emptyJSONRPC), { id: 0 }),
                                        logs: [],
                                        openrpcDocument: openrpcDocument,
                                        url: url,
                                    },
                                ], false));
                            } },
                            react_1.default.createElement(Add_1.default, { scale: 0.5 }))) }))),
        react_1.default.createElement(core_1.AppBar, { elevation: 0, position: "static", style: { zIndex: 1 } },
            react_1.default.createElement(core_1.Toolbar, null,
                react_1.default.createElement("img", { height: "30", alt: "openrpc-logo", style: { marginRight: "10px" }, src: "https://github.com/open-rpc/design/raw/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/128x128.png" //tslint:disable-line
                 }),
                react_1.default.createElement(core_1.Typography, { variant: "h6", color: "textSecondary" }, "Inspector"),
                react_1.default.createElement(TransportDropdown_1.default, { transports: transportList, onAddTransport: function (addedTransport) {
                        setTransportList(__spreadArray(__spreadArray([], transportList, true), [addedTransport], false));
                    }, selectedTransport: selectedTransport, onChange: function (changedTransport) {
                        return setSelectedTransport(changedTransport);
                    }, style: {
                        marginLeft: "10px",
                    } }),
                react_1.default.createElement(core_1.Tooltip, { title: "Play" },
                    react_1.default.createElement(core_1.IconButton, { onClick: handlePlayButton },
                        react_1.default.createElement(PlayCircleFilled_1.default, { fontSize: "large" }))),
                react_1.default.createElement(core_1.InputBase, { startAdornment: react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(core_1.Tooltip, { title: connected ? "Connected" : "Not Connected" }, connected ? (react_1.default.createElement(FlashOn_1.default, { style: { color: colors_1.green[500] } })) : (react_1.default.createElement(FlashOff_1.default, { color: "error" }))),
                        openrpcDocument ? (react_1.default.createElement(core_1.Tooltip, { title: react_1.default.createElement("div", { style: { textAlign: "center" } },
                                react_1.default.createElement(core_1.Typography, null, "OpenRPC Document Detected"),
                                react_1.default.createElement(core_1.Typography, { variant: "caption" }, "A JSON-RPC endpoint may respond to the rpc.discover method or a provide a static document. This adds features like auto completion to the inspector.")), onClick: function () {
                                return window.open("https://spec.open-rpc.org/#service-discovery-method");
                            } },
                            react_1.default.createElement(Description_1.default, { style: {
                                    color: colors_1.green[500],
                                    marginRight: "5px",
                                    cursor: "pointer",
                                }, scale: 0.1 }))) : null), value: url, placeholder: "Enter a JSON-RPC server URL", onChange: function (event) {
                        setUrl(event.target.value);
                        setTabUrl(tabIndex, event.target.value);
                    }, fullWidth: true, style: {
                        background: "rgba(0,0,0,0.1)",
                        borderRadius: "4px",
                        padding: "0px 10px",
                        marginRight: "5px",
                    } }),
                react_1.default.createElement(core_1.Tooltip, { title: "History" },
                    react_1.default.createElement(core_1.IconButton, { onClick: function () { return setHistoryOpen(true); } },
                        react_1.default.createElement(History_1.default, null))),
                props.hideToggleTheme ? null : (react_1.default.createElement(core_1.Tooltip, { title: "Toggle Theme" },
                    react_1.default.createElement(core_1.IconButton, { onClick: handleToggleDarkMode }, props.darkMode ? react_1.default.createElement(Brightness3_1.default, null) : react_1.default.createElement(WbSunny_1.default, null)))))),
        react_1.default.createElement(react_split_pane_1.default, { split: "vertical", minSize: 100, maxSize: -100, defaultSize: "50%", pane2Style: { height: "100%", width: "100%", overflow: "auto" }, style: { flexGrow: 1, height: "calc(100% - 128px)" } },
            react_1.default.createElement(react_split_pane_1.default, { split: "horizontal", minSize: 100, maxSize: -100, defaultSize: selectedTransport.schema ? "85%" : "100%", pane2Style: { height: "100%", width: "100%", overflow: "auto" }, style: { flexGrow: 1, height: "calc(100% - 128px)" } },
                react_1.default.createElement(JSONRPCRequestEditor_1.default, { onChange: function (val) {
                        var jsonResult;
                        try {
                            jsonResult = JSON.parse(val);
                        }
                        catch (e) {
                            console.error(e);
                        }
                        if (jsonResult) {
                            setJson(jsonResult);
                            setTabContent(tabIndex, jsonResult);
                        }
                    }, openrpcDocument: openrpcDocument, value: JSON.stringify(json, null, 4) }),
                selectedTransport.schema && (react_1.default.createElement(OptionsEditor_1.default, { schema: selectedTransport.schema, value: JSON.stringify(transportOptions, null, 4), onChange: handleTransportOptionsChange }))),
            react_1.default.createElement(react_1.default.Fragment, null,
                logs.length > 0 && (react_1.default.createElement(core_1.Button, { variant: "contained", style: {
                        cursor: "pointer",
                        position: "absolute",
                        top: "5px",
                        right: "50px",
                        zIndex: 2,
                        background: "rgba(255,255,255,0.2)",
                    }, onClick: handleClearButton }, "Clear")),
                logs.length === 0 && (react_1.default.createElement(core_1.Container, { maxWidth: "sm" },
                    react_1.default.createElement(core_1.Grid, { container: true, justify: "center", style: { paddingTop: "40px" } },
                        react_1.default.createElement(core_1.Typography, { gutterBottom: true }, "Press the Play button to see the results here."),
                        react_1.default.createElement(core_1.Typography, null,
                            "Use\u00A0",
                            react_1.default.createElement(core_1.Button, { startIcon: react_1.default.createElement(Keyboard_1.default, null), variant: "contained", disabled: true, size: "small", style: { marginRight: "3px" } }, "CTRL + SPACE"),
                            "to auto-complete in the editor.")))),
                logs.length !== 0 && (react_1.default.createElement("div", { style: { height: "100%" } },
                    react_1.default.createElement(logs_react_1.default, { sidebarOpen: false, openrpcDocument: openrpcDocument, logs: logs, sidebarAlign: "right", openRecentPayload: true })))))));
};
exports.default = Inspector;

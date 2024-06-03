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
var core_1 = require("@material-ui/core");
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var ArrowDropDown_1 = __importDefault(require("@material-ui/icons/ArrowDropDown"));
var TransportDropdown = function (_a) {
    var selectedTransport = _a.selectedTransport, transports = _a.transports, onChange = _a.onChange, style = _a.style, onAddTransport = _a.onAddTransport;
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleMenuItemClick = function (transport) {
        setAnchorEl(null);
        // this forces language change for react + i18n react
        onChange(transport);
    };
    var _b = (0, react_1.useState)(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var _c = (0, react_1.useState)(false), dialogOpen = _c[0], setDialogOpen = _c[1];
    var _d = (0, react_1.useState)(), selectedCustomTransport = _d[0], setSelectedCustomTransport = _d[1];
    var _e = (0, react_1.useState)(), customTransportName = _e[0], setCustomTransportName = _e[1];
    var _f = (0, react_1.useState)(), customTransportUri = _f[0], setCustomTransportUri = _f[1];
    var _g = (0, react_1.useState)(null), dialogMenuAnchorEl = _g[0], setDialogMenuAnchorEl = _g[1];
    var handleDialogAnchorClose = function () {
        setDialogMenuAnchorEl(null);
    };
    var handleDialogCustomTransportClick = function (event) {
        setDialogMenuAnchorEl(event.currentTarget);
    };
    var handleCustomTransportDialogMenuItemClick = function (transport) {
        setDialogMenuAnchorEl(null);
        setSelectedCustomTransport(transport);
    };
    var handleSubmitCustomTransport = function () {
        setDialogMenuAnchorEl(null);
        if (selectedCustomTransport && customTransportName && customTransportUri) {
            var t = {
                type: "plugin",
                transport: selectedCustomTransport,
                name: customTransportName,
                uri: customTransportUri,
            };
            onAddTransport(t);
            setDialogOpen(false);
        }
    };
    return (react_1.default.createElement("div", { style: style },
        react_1.default.createElement(core_1.Dialog, { onClose: function () { return setDialogOpen(false); }, "aria-labelledby": "simple-dialog-title", open: dialogOpen },
            react_1.default.createElement(core_1.Container, { maxWidth: "sm" },
                react_1.default.createElement(core_1.Grid, { container: true, justify: "space-between", alignItems: "center", style: {
                        padding: "30px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        marginTop: "10px",
                    } },
                    react_1.default.createElement(core_1.Typography, { variant: "h6" }, "Custom Transport Plugin"),
                    react_1.default.createElement(core_1.Typography, { variant: "caption", gutterBottom: true }, "Transport plugins are created by implementing the connect, sendData, and close methods over JSON-RPC."),
                    react_1.default.createElement(core_1.Grid, { container: true, direction: "column", spacing: 1 },
                        react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(core_1.InputBase, { placeholder: "Plugin Name", onChange: function (event) {
                                    setCustomTransportName(event.target.value);
                                }, style: {
                                    display: "block",
                                    background: "rgba(0,0,0,0.1)",
                                    borderRadius: "4px",
                                    padding: "0px 10px",
                                    marginRight: "5px",
                                } })),
                        react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(core_1.InputBase, { placeholder: "Plugin URI", onChange: function (event) {
                                    setCustomTransportUri(event.target.value);
                                }, style: {
                                    display: "block",
                                    background: "rgba(0,0,0,0.1)",
                                    borderRadius: "4px",
                                    padding: "0px 10px",
                                    marginRight: "5px",
                                } })),
                        react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(core_1.Button, { variant: "outlined", onClick: handleDialogCustomTransportClick }, selectedCustomTransport
                                ? selectedCustomTransport.name
                                : "Select A Transport"))),
                    react_1.default.createElement(core_1.Menu, { id: "transport-menu", anchorEl: dialogMenuAnchorEl, keepMounted: true, open: Boolean(dialogMenuAnchorEl), onClose: handleDialogAnchorClose }, transports
                        .filter(function (value) { return value.type !== "plugin"; })
                        .map(function (transport, _) { return (react_1.default.createElement(core_1.MenuItem, { key: transport.name, onClick: function () {
                            return handleCustomTransportDialogMenuItemClick(transport);
                        } }, transport.name)); })),
                    react_1.default.createElement(core_1.Button, { style: { marginTop: "10px", marginBottom: "10px" }, onClick: handleSubmitCustomTransport, disabled: !customTransportName ||
                            !customTransportUri ||
                            !selectedCustomTransport, variant: "contained" }, "Add Transport")))),
        react_1.default.createElement(core_1.Button, { style: {
                marginRight: "10px",
                marginLeft: "5px",
            }, variant: "outlined", onClick: handleClick, endIcon: react_1.default.createElement(ArrowDropDown_1.default, null) }, selectedTransport && selectedTransport.name),
        react_1.default.createElement(core_1.Menu, { id: "transport-menu", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleClose },
            transports.map(function (transport, _) { return (react_1.default.createElement(core_1.MenuItem, { onClick: function () { return handleMenuItemClick(transport); }, key: transport.name }, transport.name)); }),
            react_1.default.createElement(core_1.MenuItem, { onClick: function () { return setDialogOpen(true); } },
                react_1.default.createElement(Add_1.default, { style: { marginRight: "5px" } }),
                react_1.default.createElement(core_1.Typography, { variant: "caption" }, "Add Transport")))));
};
exports.default = TransportDropdown;

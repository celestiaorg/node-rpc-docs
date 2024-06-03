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
var cardList_1 = __importDefault(require("../cardList/cardList"));
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var drawerWidth = 200;
var defaultOpenRecentPayload = false;
var defaultSidebarAlign = "left";
var useStyles = (0, styles_1.makeStyles)(function (theme) {
    return (0, styles_1.createStyles)({
        logsReact: {
            display: "flex",
            width: "100%",
            height: "100%",
        },
        extendDiv: {
            width: "25px",
        },
        hide: {
            display: "none",
        },
        menuButton: {
            paddingLeft: 0,
            paddingRight: 0,
            marginLeft: 0,
            marginRight: 0,
        },
        content: {
            width: "100%",
            height: "auto",
            overflow: "auto",
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        left: {
            marginLeft: -drawerWidth,
        },
        right: {
            marginRight: -drawerWidth,
        },
        contentShift: {
            width: "100%",
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
            marginRight: 0,
        },
    });
});
var JSONRPCLogger = function (props) {
    var cardEndRef = (0, react_1.useRef)(null);
    var methodFilter = (0, react_1.useState)(["all"])[0];
    var sidebarAlignment = props.sidebarAlign !== undefined ? props.sidebarAlign : defaultSidebarAlign;
    var openRecentPayload = props.openRecentPayload !== undefined ? props.openRecentPayload : defaultOpenRecentPayload;
    var classes = useStyles();
    var scrollToBottom = function () {
        if (cardEndRef && cardEndRef.current !== null) {
            cardEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    (0, react_1.useLayoutEffect)(scrollToBottom, [props.logs]);
    (0, react_1.useLayoutEffect)(scrollToBottom, []);
    return (react_1.default.createElement(react_1.default.Fragment, null, sidebarAlignment === "left" ?
        react_1.default.createElement("div", { className: classes.logsReact },
            react_1.default.createElement("div", { className: (0, clsx_1.default)(classes.content, classes.left) },
                react_1.default.createElement(cardList_1.default, { logs: props.logs, filter: methodFilter, openRecentPayload: openRecentPayload }),
                react_1.default.createElement("div", { ref: cardEndRef })))
        :
            react_1.default.createElement("div", { className: classes.logsReact },
                react_1.default.createElement("div", { className: (0, clsx_1.default)(classes.content, classes.right) },
                    react_1.default.createElement(cardList_1.default, { logs: props.logs, filter: methodFilter, openRecentPayload: openRecentPayload, openrpcDocument: props.openrpcDocument }),
                    react_1.default.createElement("div", { ref: cardEndRef })))));
};
exports.default = JSONRPCLogger;

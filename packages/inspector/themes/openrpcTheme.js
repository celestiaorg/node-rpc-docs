"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkTheme = exports.lightTheme = void 0;
var styles_1 = require("@material-ui/core/styles");
var grey_1 = __importDefault(require("@material-ui/core/colors/grey"));
exports.lightTheme = (0, styles_1.createMuiTheme)({
    props: {
        MuiAppBar: {
            position: "sticky",
        },
        MuiCard: {
            elevation: 0,
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                background: "#fff !important",
            },
        },
    },
    palette: {
        background: {
            default: "#fff",
        },
    },
});
exports.darkTheme = (0, styles_1.createMuiTheme)({
    props: {
        MuiAppBar: {
            position: "sticky",
        },
        MuiCard: {
            elevation: 0,
        },
    },
    palette: {
        type: "dark",
        background: {
            default: grey_1.default[900],
            paper: grey_1.default[800],
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                background: "transparent !important",
            },
        },
        MuiTable: {
            root: {
                background: "transparent !important",
            },
        },
        MuiTypography: {
            root: {
                color: grey_1.default[400],
            },
        },
    },
});
exports.default = {
    darkTheme: exports.darkTheme,
    lightTheme: exports.lightTheme,
};

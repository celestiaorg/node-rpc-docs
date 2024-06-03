"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkTheme = void 0;
var styles_1 = require("@material-ui/core/styles");
var darkTheme = function (prefersDarkMode) {
    return (0, styles_1.createMuiTheme)({
        props: {
            MuiAppBar: {
                position: "sticky",
            },
            MuiCard: {
                elevation: 0,
            },
        },
        palette: {
            type: prefersDarkMode ? "dark" : "light",
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
        },
    });
};
exports.darkTheme = darkTheme;
exports.default = exports.darkTheme;

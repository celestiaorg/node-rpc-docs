"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var getChipColorForLog = function (log, theme, isNotification) {
    if (isNotification === void 0) { isNotification = false; }
    var paletteType = theme.palette.type;
    var styles = {
        backgroundColor: theme.palette.success[paletteType],
    };
    if (isNotification) {
        styles.backgroundColor = theme.palette.info[paletteType];
        styles.marginRight = theme.spacing(1);
        return styles;
    }
    if (log.type === "request") {
        styles.backgroundColor = theme.palette.primary[paletteType];
        return styles;
    }
    if (log.payload.error) {
        styles.backgroundColor = theme.palette.common.white;
        styles.color = theme.palette.error.main;
        return styles;
    }
    return styles;
};
var LogChips = function (props) {
    var theme = (0, styles_1.useTheme)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        props.log.notification &&
            react_1.default.createElement(core_1.Chip, { label: "notification", style: getChipColorForLog(props.log, theme, true) }),
        react_1.default.createElement(core_1.Chip, { label: props.log.type, style: getChipColorForLog(props.log, theme) })));
};
exports.default = react_1.default.memo(LogChips);

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
var LogChips_1 = __importDefault(require("../logChips/LogChips"));
var date_fns_1 = require("date-fns");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var react_2 = __importDefault(require("@monaco-editor/react"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var Assignment_1 = __importDefault(require("@material-ui/icons/Assignment"));
//import "./cardListItem.css";
var alert_1 = __importDefault(require("../alert/alert"));
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var monaco_add_json_schema_diagnostics_1 = require("@etclabscore/monaco-add-json-schema-diagnostics");
var monaco = __importStar(require("monaco-editor"));
var openrpcDocumentToJSONRPCSchema_1 = __importDefault(require("../../helpers/openrpcDocumentToJSONRPCSchema"));
var openrpcDocumentToJSONRPCSchemaResult_1 = __importDefault(require("../../helpers/openrpcDocumentToJSONRPCSchemaResult"));
var getLogItemBackground = function (log, theme) {
    var paletteType = theme.palette.type;
    if (log.payload.error) {
        return { backgroundColor: theme.palette.error[paletteType] };
    }
    return {};
};
var useStyles = (0, styles_1.makeStyles)(function (theme) {
    return (0, styles_1.createStyles)({
        cardHeader: {
            padding: "8px",
            paddingBottom: "0px",
            paddingTop: "0px",
        },
        cardContent: {
            padding: "8px !important",
        },
    });
});
var getCardStyle = function (log) {
    if (log.method.includes("rpc.")) {
        return "call rpc-call";
    }
    if (log.type === "response") {
        if (log.payload.error) {
            return "call response-error";
        }
        return "call response-success";
    }
    return "call request";
};
var CardListItem = function (props) {
    var theme = (0, styles_1.useTheme)();
    var callClass = getCardStyle(props.log);
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)(), editor = _b[0], setEditor = _b[1];
    var classes = useStyles();
    // BEGIN HEIGHT SETTING SHANAYNAYS
    var MAX_HEIGHT = 300;
    var MIN_COUNT_OF_LINES = 3;
    var LINE_HEIGHT = 20;
    var _c = (0, react_1.useState)(170), height = _c[0], setHeight = _c[1];
    var valueGetter = (0, react_1.useRef)();
    var handleEditorChange = (0, react_1.useCallback)(function () {
        var countOfLines = valueGetter.current
            .getValue()
            .split("\n").length;
        if (countOfLines >= MIN_COUNT_OF_LINES) {
            var currentHeight = countOfLines * LINE_HEIGHT;
            if (MAX_HEIGHT > currentHeight) {
                setHeight(currentHeight);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // END HEIGHT SETTING SHANAYNAYS
    (0, react_1.useEffect)(function () {
        if (editor === undefined) {
            return;
        }
        var s;
        if (props.log.type === "request") {
            s = (0, openrpcDocumentToJSONRPCSchema_1.default)(props.openrpcDocument);
        }
        else {
            s = (0, openrpcDocumentToJSONRPCSchemaResult_1.default)(props.log.method, props.openrpcDocument);
        }
        var modelName = (props.openrpcDocument && props.openrpcDocument.info) ? props.openrpcDocument.info.title : "inspector";
        var modelUriString = "inmemory://".concat(modelName, "-").concat(Math.random(), ".json");
        var modelUri = monaco.Uri.parse(modelUriString);
        var model = monaco.editor.createModel(JSON.stringify(props.log.payload, null, 2) || "", "json", modelUri);
        editor.setModel(model);
        (0, monaco_add_json_schema_diagnostics_1.addDiagnostics)(modelUri.toString(), s, monaco);
        valueGetter.current = editor;
        handleEditorChange();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.openrpcDocument, editor]);
    var handleEditorDidMount = function (__, ed) {
        setEditor(ed);
    };
    var handleCopy = function (event, value) {
        event.stopPropagation();
        setOpen(true);
        (0, copy_to_clipboard_1.default)(JSON.stringify(value, null, 4));
    };
    var handleClose = function () {
        setOpen(false);
    };
    return (react_1.default.createElement(core_1.Box, { m: 2, key: JSON.stringify(props.log), className: [
            "call-box",
            "".concat(props.log.type === "response" ? "response" : ""),
            "".concat(props.filter.includes(props.log.method) || props.filter.includes("all") ? "" : "hidden"),
        ].join(" ") },
        react_1.default.createElement(core_1.Snackbar, { open: open, autoHideDuration: 4000, onClose: handleClose },
            react_1.default.createElement(alert_1.default, { severity: "success" }, "Payload Copied to Clipboard")),
        react_1.default.createElement(core_1.Card, { raised: true, className: callClass, style: getLogItemBackground(props.log, theme), elevation: 8 },
            react_1.default.createElement(core_1.CardHeader, { title: props.log.method, action: react_1.default.createElement(LogChips_1.default, { log: props.log }), subheader: react_1.default.createElement(core_1.Typography, { variant: "caption", color: "textSecondary" }, (0, date_fns_1.formatRelative)(new Date(), props.log.timestamp)) }),
            react_1.default.createElement(core_1.CardContent, { className: classes.cardContent },
                props.log.batchId ?
                    react_1.default.createElement(core_1.Typography, null,
                        "Batch: ",
                        props.log.batchId)
                    :
                        null,
                react_1.default.createElement(core_1.ExpansionPanel, { defaultExpanded: true },
                    react_1.default.createElement(core_1.ExpansionPanelSummary, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null) },
                        react_1.default.createElement(core_1.Tooltip, { title: "Copy to clipboard" },
                            react_1.default.createElement(core_1.Button, { onClick: function (event) { return handleCopy(event, props.log.payload); }, endIcon: react_1.default.createElement(Assignment_1.default, { style: { fontSize: 14 } }) }, "Payload"))),
                    react_1.default.createElement(core_1.ExpansionPanelDetails, { style: { margin: 0, padding: 0 } },
                        react_1.default.createElement(react_2.default, { width: "100%", height: height, language: "json", value: JSON.stringify(props.log.payload, null, 4), onMount: handleEditorDidMount, options: {
                                automaticLayout: true,
                                useShadows: false,
                                glyphMargin: false,
                                overviewRulerBorder: false,
                                showFoldingControls: "always",
                                minimap: {
                                    enabled: false,
                                },
                                hideCursorInOverviewRuler: true,
                                scrollbar: {
                                    useShadows: false,
                                    scrollByPage: false,
                                },
                                scrollBeyondLastLine: false,
                                lineNumbers: "off",
                                fixedOverflowWidgets: true,
                                readOnly: true,
                            } })))))));
};
exports.default = react_1.default.memo(CardListItem);

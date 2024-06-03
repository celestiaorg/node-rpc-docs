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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var monaco = __importStar(require("monaco-editor"));
var initVimMode = require("monaco-vim").initVimMode; //tslint:disable-line
// Vim Mode:
// Press Chord Ctrl-K, Ctrl-V => the action will run if it is enabled
var useMonacoVimMode = function (editor) {
    var _a = (0, react_1.useState)(), vimMode = _a[0], setVimMode = _a[1];
    (0, react_1.useEffect)(function () {
        if (!editor) {
            return;
        }
        editor.addAction({
            id: "vim-mode",
            label: "Vim Mode",
            keybindings: [
                monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K, monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_V), //tslint:disable-line
            ],
            contextMenuGroupId: "navigation",
            contextMenuOrder: 1.5,
            run: function () {
                if (vimMode) {
                    vimMode.dispose();
                }
                setVimMode(initVimMode(editor));
            },
        });
        return function () {
            if (vimMode) {
                vimMode.dispose();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editor]);
    return [editor, vimMode];
};
exports.default = useMonacoVimMode;

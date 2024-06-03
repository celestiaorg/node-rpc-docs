"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var cardListItem_1 = __importDefault(require("../cardListItem/cardListItem"));
var CardList = function (props) {
    return (react_1.default.createElement(react_1.default.Fragment, null, props.logs.map(function (call, i) {
        if (props.logs.length - 1 === i) {
            return react_1.default.createElement(cardListItem_1.default, { openrpcDocument: props.openrpcDocument, log: call, filter: props.filter, open: true });
        }
        else {
            return react_1.default.createElement(cardListItem_1.default, { openrpcDocument: props.openrpcDocument, log: call, filter: props.filter, open: false });
        }
    })));
};
exports.default = CardList;

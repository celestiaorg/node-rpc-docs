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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var emptyJSONRPC = {
    jsonrpc: "2.0",
    method: "",
    params: [],
    id: 0,
};
var useTabs = function (defaultTabs) {
    var _a = (0, react_1.useState)(0), tabIndex = _a[0], setTabIndex = _a[1];
    var _b = (0, react_1.useState)(defaultTabs || [{ name: "New Tab", content: emptyJSONRPC, url: undefined, logs: [] }]), tabs = _b[0], setTabs = _b[1];
    var handleClose = function (event, index) {
        if (tabs.length === 1) {
            return;
        }
        var t = tabs.filter(function (tab, i) { return i !== index; });
        setTabs(t);
    };
    (0, react_1.useEffect)(function () {
        if (tabs.length === tabIndex) {
            setTabIndex(tabIndex - 1);
        }
    }, [tabs, tabIndex]);
    var setTabName = function (tab, name) {
        var newTabs = tabs.map(function (innerTab) {
            if (innerTab === tab) {
                return __assign(__assign({}, innerTab), { name: name });
            }
            return innerTab;
        });
        setTabs(newTabs);
    };
    var setTabEditing = function (tab, editing) {
        var newTabs = tabs.map(function (innerTab) {
            if (innerTab === tab) {
                return __assign(__assign({}, innerTab), { editing: editing });
            }
            return innerTab;
        });
        setTabs(newTabs);
    };
    var setTabOpenRPCDocument = function (ti, openrpcDocument) {
        var newTabs = tabs.map(function (innerTab, i) {
            if (i === ti) {
                if (!openrpcDocument) {
                    return {
                        name: innerTab.name,
                        content: innerTab.content,
                        logs: innerTab.logs,
                        editing: innerTab.editing,
                        url: innerTab.url,
                    };
                }
                return __assign(__assign({}, innerTab), { openrpcDocument: openrpcDocument });
            }
            return innerTab;
        });
        setTabs(newTabs);
    };
    var setTabUrl = function (ti, url) {
        var newTabs = tabs.map(function (innerTab, i) {
            if (i === ti) {
                return __assign(__assign({}, innerTab), { url: url });
            }
            return innerTab;
        });
        setTabs(newTabs);
    };
    var setTabLogs = function (ti, logs) {
        var newTabs = tabs.map(function (innerTab, i) {
            if (i === ti) {
                return __assign(__assign({}, innerTab), { logs: logs });
            }
            return innerTab;
        });
        setTabs(newTabs);
    };
    var setTabContent = function (ti, content) {
        var newTabs = tabs.map(function (innerTab, i) {
            if (i === ti) {
                return __assign(__assign({}, innerTab), { content: content });
            }
            return innerTab;
        });
        setTabs(newTabs);
    };
    var handleLabelChange = function (ev, tab) {
        setTabName(tab, ev.target.value);
    };
    return {
        setTabContent: setTabContent,
        setTabEditing: setTabEditing,
        setTabIndex: setTabIndex,
        setTabName: setTabName,
        tabs: tabs,
        setTabs: setTabs,
        handleClose: handleClose,
        tabIndex: tabIndex,
        handleLabelChange: handleLabelChange,
        setTabUrl: setTabUrl,
        setTabLogs: setTabLogs,
        setTabOpenRPCDocument: setTabOpenRPCDocument,
    };
};
exports.default = useTabs;

import React from "react";
import { IJSONRPCLog } from "../logsReact/logsReact";
import { OpenrpcDocument } from "@open-rpc/meta-schema";
interface IProps {
    log: IJSONRPCLog;
    filter: string[];
    open: boolean;
    openrpcDocument?: OpenrpcDocument;
}
declare const _default: React.NamedExoticComponent<IProps>;
export default _default;

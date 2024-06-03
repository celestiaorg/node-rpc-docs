import React from "react";
import { OpenrpcDocument } from "@open-rpc/meta-schema";
export interface IJSONRPCLog {
    type: "response" | "request";
    notification?: boolean;
    method: string;
    timestamp: Date;
    payload: any;
    batchId?: number;
}
type AlignString = "right" | "left";
interface IProps {
    logs: IJSONRPCLog[];
    openRecentPayload?: boolean;
    sidebarAlign?: AlignString;
    sidebarOpen?: boolean;
    openrpcDocument?: OpenrpcDocument;
}
declare const JSONRPCLogger: React.FC<IProps>;
export default JSONRPCLogger;

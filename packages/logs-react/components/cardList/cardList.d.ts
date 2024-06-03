import React from "react";
import { IJSONRPCLog } from "../logsReact/logsReact";
import { OpenrpcDocument } from "@open-rpc/meta-schema";
interface IProps {
    logs: IJSONRPCLog[];
    filter: string[];
    openRecentPayload: boolean;
    openrpcDocument?: OpenrpcDocument;
}
declare const CardList: React.FC<IProps>;
export default CardList;

import React from "react";
import { OpenrpcDocument } from "@open-rpc/meta-schema";
import { ITransport, TTransport } from "../hooks/useTransport";
interface IProps {
    url?: string;
    request?: any;
    darkMode?: boolean;
    hideToggleTheme?: boolean;
    openrpcDocument?: OpenrpcDocument;
    transport?: TTransport;
    customTransport?: ITransport;
    onToggleDarkMode?: () => void;
}
declare const Inspector: React.FC<IProps>;
export default Inspector;

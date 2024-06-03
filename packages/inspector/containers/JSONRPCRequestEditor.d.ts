import React from "react";
import { MethodObject, OpenrpcDocument } from "@open-rpc/meta-schema";
interface IProps {
    onChange?: (newValue: any) => void;
    openrpcMethodObject?: MethodObject;
    openrpcDocument?: OpenrpcDocument;
    value: any;
}
declare const JSONRPCRequestEditor: React.FC<IProps>;
export default JSONRPCRequestEditor;

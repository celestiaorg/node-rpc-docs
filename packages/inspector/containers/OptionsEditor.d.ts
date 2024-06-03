import React from "react";
import { JSONSchema, MethodObject } from "@open-rpc/meta-schema";
interface IProps {
    onChange?: (newValue: any) => void;
    openrpcMethodObject?: MethodObject;
    schema?: JSONSchema;
    value: any;
}
declare const OptionsEditor: React.FC<IProps>;
export default OptionsEditor;

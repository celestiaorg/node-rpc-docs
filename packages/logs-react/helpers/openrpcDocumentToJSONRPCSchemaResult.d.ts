import { OpenrpcDocument } from "@open-rpc/meta-schema";
declare const openrpcDocumentToJSONRPCSchemaResult: (methodName: string, openrpcDocument: OpenrpcDocument) => {
    type: string;
    properties: {
        id: any;
        jsonrpc: any;
        result: any;
    };
};
export default openrpcDocumentToJSONRPCSchemaResult;

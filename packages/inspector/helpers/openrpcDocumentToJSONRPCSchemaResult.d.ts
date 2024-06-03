import { OpenrpcDocument } from "@open-rpc/meta-schema";
declare const openrpcDocumentToJSONRPCSchemaResult: (openrpcDocument: OpenrpcDocument, methodName: string) => {
    type: string;
    properties: {
        id: any;
        jsonrpc: any;
        result: any;
    };
};
export default openrpcDocumentToJSONRPCSchemaResult;

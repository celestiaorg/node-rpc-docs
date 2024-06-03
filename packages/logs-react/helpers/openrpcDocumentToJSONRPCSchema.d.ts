import { OpenrpcDocument } from "@open-rpc/meta-schema";
declare const openrpcDocumentToJSONRPCSchema: (openrpcDocument: OpenrpcDocument) => {
    type: string;
    properties: {
        id: any;
        jsonrpc: any;
        method: {
            type: string;
            oneOf: {
                const: string;
                description: string | undefined;
                markdownDescription: string | undefined;
            }[];
        };
    };
    allOf: {
        if: {
            properties: {
                method: {
                    const: string;
                };
            };
        };
        then: {
            properties: {
                params: {
                    oneOf: ({
                        type: string;
                        minItems: number;
                        maxItems: number;
                        defaultSnippets: {
                            label: any;
                            description: any;
                            body: any;
                        }[];
                        items: any[];
                        properties?: undefined;
                    } | {
                        type: string;
                        properties: any;
                        minItems?: undefined;
                        maxItems?: undefined;
                        defaultSnippets?: undefined;
                        items?: undefined;
                    })[];
                };
            };
        };
    }[];
};
export default openrpcDocumentToJSONRPCSchema;

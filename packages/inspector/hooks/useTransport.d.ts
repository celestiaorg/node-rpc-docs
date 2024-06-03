import { JSONRPCError } from "@open-rpc/client-js/build/Error";
import { Transport } from "@open-rpc/client-js/build/transports/Transport";
import { JSONSchema } from "@open-rpc/meta-schema";
export type TTransport = "http" | "websocket" | "postmessagewindow" | "postmessageiframe";
export interface IWebTransport {
    type: TTransport;
    name?: string;
    schema?: JSONSchema;
}
export interface IPluginTransport {
    type: "plugin";
    uri: string;
    name: string;
    transport: ITransport;
}
export type ITransport = IWebTransport | IPluginTransport;
type TUseTransport = (transports: ITransport[], url: string, defaultTransportType: ITransport, transportOptions?: any) => [Transport | undefined, (t: ITransport) => void, JSONRPCError | undefined, boolean];
declare const useTransport: TUseTransport;
export default useTransport;

import React from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { ITransport } from "../hooks/useTransport";
interface IProps {
    transports: ITransport[];
    selectedTransport: ITransport;
    onChange: (changedTransport: ITransport) => void;
    onAddTransport: (addedTransport: ITransport) => void;
    style?: CSSProperties;
}
declare const TransportDropdown: React.FC<IProps>;
export default TransportDropdown;

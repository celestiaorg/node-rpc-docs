/* eslint-disable */
import React, { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { MethodObject, OpenrpcDocument } from "@open-rpc/meta-schema";
import useWindowSize from "@rehooks/window-size";
import { addDiagnostics } from "@etclabscore/monaco-add-json-schema-diagnostics";
import openrpcDocumentToJSONRPCSchema from "../helpers/openrpcDocumentToJSONRPCSchema";

interface IProps {
  onChange?: (newValue: any) => void;
  openrpcMethodObject?: MethodObject;
  openrpcDocument?: OpenrpcDocument;
  value: any;
}

const JSONRPCRequestEditor: React.FC<IProps> = (props) => {
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor>();
  const windowSize = useWindowSize();
  useEffect(() => {
    if (editor) {
      (editor as monaco.editor.IStandaloneCodeEditor).layout();
    }
  }, [windowSize, editor]);

  useEffect(() => {
    if (!editor) {
      return;
    }
    const modelName =
      props.openrpcDocument && props.openrpcDocument.info
        ? props.openrpcDocument.info.title
        : "inspector";
    const modelUriString = `inmemory://${modelName}-${Math.random()}.json`;
    const modelUri = monaco.Uri.parse(modelUriString);
    const model = monaco.editor.createModel(
      props.value || "",
      "json",
      modelUri,
    );
    (editor as monaco.editor.IStandaloneCodeEditor).setModel(model);
    let schema: any = {
      type: "object",
      properties: {
        jsonrpc: {
          type: "string",
          const: "2.0",
        },
        id: {
          oneOf: [
            {
              type: "string",
            },
            {
              type: "number",
            },
          ],
        },
        method: {
          type: "string",
        },
      },
    };

    if (props.openrpcDocument) {
      schema = openrpcDocumentToJSONRPCSchema(props.openrpcDocument);
    } else {
      schema = {
        additionalProperties: false,
        properties: {
          ...schema.properties,
          params: {
            oneOf: [{ type: "array" }, { type: "object" }],
          },
        },
      };
    }
    addDiagnostics(modelUri.toString(), schema, monaco);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.openrpcDocument, editor]);

  function handleEditorDidMount(_: any, ed: any) {
    setEditor(ed);
  }

  const handleChange = (ev: any, value: any) => {
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <MonacoEditor
      height="100%"
      width="100%"
      value={props.value}
      onMount={handleEditorDidMount}
      options={{
        minimap: {
          enabled: false,
        },
        automaticLayout: true,
        fixedOverflowWidgets: true,
      }}
      language="json"
      onChange={handleChange}
    />
  );
};

export default JSONRPCRequestEditor;

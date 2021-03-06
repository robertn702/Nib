import React from "react";
import Editor from "nib-core";

/**
 * @visibleName 1. Block
 */
const BlockPluginDemo = ({ grouped }) => (
  <Editor
    config={{
      plugins: { options: "block" },
      toolbar: {
        options: "top",
        top: {
          block: { grouped },
          options: "block"
        }
      }
    }}
  />
);

export default BlockPluginDemo;

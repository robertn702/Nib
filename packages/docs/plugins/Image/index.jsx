import React from "react";
import Editor from "nib-core";

/**
 * @visibleName 6. Image
 */
const ImagePlugin = () => (
  <Editor
    config={{
      plugins: { options: "image" },
      toolbar: {
        options: "top",
        top: { options: "image" }
      }
    }}
  />
);

export default ImagePlugin;

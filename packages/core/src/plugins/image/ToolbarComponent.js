import React, { PureComponent } from "react";
import { ToolbarButton, Icons } from "nib-ui";

import { imagePluginKey } from "./plugins";

class ImageToolbarComponent extends PureComponent {
  showImageToolbar = () => {
    const { view = {} } = this.props.app_params;
    const { state, dispatch } = view;
    dispatch(state.tr.setMeta("SHOW_IMAGE_TOOLBAR", true));
  };

  isImageSelected = () => {
    return false;
  };

  render() {
    return (
      <ToolbarButton
        name="image"
        onClick={this.showImageToolbar}
        disabled={this.isImageSelected()}
      >
        <Icons.Image />
      </ToolbarButton>
    );
  }
}

export default ImageToolbarComponent;

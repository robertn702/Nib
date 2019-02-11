import React, { PureComponent } from "react";
import styled from "@emotion/styled";

import { imagePluginKey } from "./plugins";

class UploadImage extends PureComponent {
  selectImage = event => {
    const { files } = event.target;
    if (files && files.length > 0) {
      // uploadCallback(file).then(({ data }) => {
      //   this.setState({
      //     imgSrc: data.src
      //   });
      //   this.fileUpload = false;
      // });
    }
  };

  render() {
    return (
      <Wrapper>
        <UploadSection>
          <input type="file" id="file" onChange={this.selectImage} />
        </UploadSection>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const UploadSection = styled.div`
  background-color: white;
  border-radius: 2px;
  height: 200px;
  width: 200px;
`;

export default [
  {
    condition: state => {
      const pluginState = imagePluginKey.getState(state);
      return pluginState && pluginState.showImageToolbar;
    },
    component: UploadImage
  }
];

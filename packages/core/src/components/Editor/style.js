import styled from "@emotion/styled";

import { getBlockStyles } from "./blockStyles";

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.wrapper.backgroundColor};
  color: ${({ theme }) => theme.wrapper.color};
  border-bottom: ${({ theme }) => theme.wrapper.borderBottom};
  border-left: ${({ theme }) => theme.wrapper.borderLeft};
  border-right: ${({ theme }) => theme.wrapper.borderRight};
  border-top: ${({ theme }) => theme.wrapper.borderTop};
  border-bottom-left-radius: ${({ theme }) =>
    theme.wrapper.borderBottomLeftRadius};
  border-bottom-right-radius: ${({ theme }) =>
    theme.wrapper.borderBottomRightRadius};
  border-top-left-radius: ${({ theme }) => theme.wrapper.borderTopLeftRadius};
  border-top-right-radius: ${({ theme }) => theme.wrapper.borderTopRightRadius};
  height: ${({ theme }) => theme.wrapper.height};
  width: ${({ theme }) => theme.wrapper.width};
  padding: ${({ theme }) => theme.wrapper.padding};
  font-style: ${({ theme }) => theme.wrapper.fontStyle};
  font-family: ${({ theme }) => theme.wrapper.fontFamily};
  ${({ theme }) => getBlockStyles(theme.blockStyles)};
`;

export const StyledEditor = styled.div`
  background-color: ${({ theme }) => theme.editor.backgroundColor};
  color: ${({ theme }) => theme.editor.color};
  border-bottom: ${({ theme }) => theme.editor.borderBottom};
  border-left: ${({ theme }) => theme.editor.borderLeft};
  border-right: ${({ theme }) => theme.editor.borderRight};
  border-top: ${({ theme }) => theme.editor.borderTop};
  border-bottom-left-radius: ${({ theme }) =>
    theme.editor.borderBottomLeftRadius};
  border-bottom-right-radius: ${({ theme }) =>
    theme.editor.borderBottomRightRadius};
  border-top-left-radius: ${({ theme }) => theme.editor.borderTopLeftRadius};
  border-top-right-radius: ${({ theme }) => theme.editor.borderTopRightRadius};
  height: ${({ theme }) => theme.editor.height};
  width: ${({ theme }) => theme.editor.width};
  padding: ${({ theme }) => theme.editor.padding};
  font-size: ${({ theme }) => theme.editor.fontSize};
  font-style: ${({ theme }) => theme.editor.fontStyle};
  font-family: ${({ theme }) => theme.editor.fontFamily};
  & .ProseMirror {
    &:focus {
      outline: none;
    }
  }
`;

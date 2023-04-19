import styled, { css } from "styled-components";

export const PanelContainer = styled.div`
  position: fixed;
  top: 0;
  ${(props) => props.position}: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1000;

  ${(props) =>
    props.open &&
    css`
      pointer-events: all;
    `}

  ${(props) =>
    !props.hasBackDrop &&
    css`
      width: 430px;
    `}
`;

export const PanelOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  z-index: 1001;
  transition: opacity 0.6s cubic-bezier(0, 0.55, 0.45, 1);

  ${(props) => {
    if (props.open) {
      return css`
        cursor: pointer;
        opacity: 0.01;
      `;
    }
  }}
`;

export const PanelContent = styled.div`
  position: fixed;
  top: 0;
  ${(props) => props.position}: -433px;
  width: 430px;
  height: 100%;
  background-color: #fff;
  z-index: 1002;
  padding: 24px 20px;
  transition: ${(props) => props.position} 0.6s cubic-bezier(0, 0.55, 0.45, 1);
  box-shadow: -4px 0px 64px rgba(0, 0, 0, 0.07);

  ${(props) => {
    if (props.open) {
      return css`
        ${(props) => props.position}: 0;
      `;
    }
  }}
`;

export const PanelTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  color: #000000;
  margin-right: 15px;
  margin-bottom: 0;
`;

export const PanelContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const PanelChildren = styled.div`
  height: calc(100vh - 86px);
  overflow-y: auto;
  padding-bottom: 20px;
`;

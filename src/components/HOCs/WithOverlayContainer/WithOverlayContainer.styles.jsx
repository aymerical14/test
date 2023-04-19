import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.37);
  z-index: 60;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 25px;
`;

export const OverlayContent = styled.div`
  max-width: 700px;
  margin: 1.875rem auto;
  position: relative;
  width: auto;
`;

import React from "react";

import { OverlayContent, Overlay } from "./WithOverlayContainer.styles";

const WithOverlayContainer = (WrappedComponent) => ({ ...props }) => {
  return (
    <Overlay>
      <OverlayContent>
        <WrappedComponent {...props} />
      </OverlayContent>
    </Overlay>
  );
};

export default WithOverlayContainer;

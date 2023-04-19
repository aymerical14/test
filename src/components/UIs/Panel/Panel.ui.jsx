import React from "react";
import { Icon } from "@iconify/react";

import windowCloseLine from "@iconify/icons-clarity/window-close-line";

import {
  PanelChildren,
  PanelContainer,
  PanelContent,
  PanelContentHeader,
  PanelOverlay,
  PanelTitle,
} from "./Panel.styles";

const Panel = ({
  toggleOpen = true,
  closeSidePanel,
  hasBackDrop = false,
  position = "right",
  title,
  children,
}) => {
  let pos;

  if (position === "right" || position === "left") pos = position;
  else pos = "right";

  return (
    <PanelContainer position={pos} hasBackDrop={hasBackDrop} open={toggleOpen}>
      {hasBackDrop && (
        <PanelOverlay open={toggleOpen} onClick={closeSidePanel} />
      )}
      <PanelContent position={pos} open={toggleOpen}>
        <PanelContentHeader>
          <PanelTitle>{title}</PanelTitle>
          <Icon
            onClick={closeSidePanel}
            icon={windowCloseLine}
            style={{
              color: "#000",
              fontSize: "36px",
              position: "relative",
              top: "-5px",
              cursor: "pointer",
            }}
          />
        </PanelContentHeader>
        <PanelChildren>{children}</PanelChildren>
      </PanelContent>
    </PanelContainer>
  );
};

export default Panel;

import React from "react";
import Icon from "@iconify/react";

import {
  OverviewContainer,
  OverviewRow,
  OverviewLabel,
  OverviewValue,
  OverviewPreview,
} from "./OverviewItem.styles";

const OverviewItem = ({ title, value, icon, bgIcon }) => {
  return (
    <OverviewContainer>
      <OverviewRow>
        <div>
          <OverviewLabel>{title}</OverviewLabel>
          <OverviewValue>{value}</OverviewValue>
        </div>
        <div>
          <OverviewPreview bgIcon={bgIcon}>
            <Icon
              icon={icon}
              style={{ color: `rgb(${bgIcon})`, fontSize: "2em" }}
            />
          </OverviewPreview>
        </div>
      </OverviewRow>
    </OverviewContainer>
  );
};

export default OverviewItem;

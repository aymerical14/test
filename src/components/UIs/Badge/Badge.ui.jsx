import React from "react";

import { BadgeContainer } from "./Badge.styles";

const Badge = ({ type, bgColor, children }) => {
  return (
    <BadgeContainer bgColor={bgColor} type={type}>
      {children}
    </BadgeContainer>
  );
};

export default Badge;

import React from "react";

import { LogoContainer } from "./LogoBrand.styles";

const LogoBrand = ({ brandName = "" }) => {
  return (
    <LogoContainer>
      <img
        src={require("./orange_logo.svg").default}
        alt="orange-logo"
        title={brandName}
        width={50}
        height={50}
        loading="lazy"
        className="mr-3"
      />
         {brandName}
    </LogoContainer>
  );
};

export default LogoBrand;

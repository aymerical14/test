import React from "react";
import ContentLoader from "react-content-loader";

import {
  ContainerLoader,
  RedirectLoaderContainer,
} from "./RedirectLoader.styles";

const RedirectLoader = ({ backgroundColor = "#f5f6f7" }) => {
  return (
    <RedirectLoaderContainer>
      <ContainerLoader>
        <ContentLoader viewBox="0 0 380 10" backgroundColor={backgroundColor}>
          <rect x="0" y="0" rx="2" ry="2" width="30%" height="8" />
        </ContentLoader>
        <br />
        <br />
        <ContentLoader viewBox="0 0 1000 180" backgroundColor={backgroundColor}>
          <rect x="0" y="0" rx="5" ry="5" width="100%" height="35" />
          <rect x="0" y="50" rx="5" ry="5" width="100%" height="35" />
          <rect x="0" y="100" rx="5" ry="5" width="100%" height="35" />
          <rect x="0" y="150" rx="5" ry="5" width="100%" height="35" />
        </ContentLoader>
      </ContainerLoader>
    </RedirectLoaderContainer>
  );
};

export default RedirectLoader;

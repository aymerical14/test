import React from "react";
import ContentLoader from "react-content-loader";

import {
  HomepageLoaderContainer,
  ContainerLoader,
  StatOverview,
  TopLoader,
} from "./HomepageLoader.styles";

const HomepageLoader = ({ backgroundColor = "#f5f6f7" }) => {
  return (
    <HomepageLoaderContainer>
      <TopLoader>
        <ContentLoader viewBox="0 0 380 110" backgroundColor={backgroundColor}>
          <rect x="0" y="0" rx="5" ry="5" width="100%" height="110" />
        </ContentLoader>
        <ContentLoader viewBox="0 0 380 110" backgroundColor={backgroundColor}>
          <rect x="0" y="0" rx="5" ry="5" width="100%" height="110" />
        </ContentLoader>
      </TopLoader>
      <ContainerLoader>
        <ContentLoader viewBox="0 0 380 10" backgroundColor={backgroundColor}>
          <rect x="0" y="0" rx="2" ry="2" width="30%" height="8" />
        </ContentLoader>
        <br />
        <br />
        <StatOverview>
          <ContentLoader
            viewBox="0 0 270 110"
            backgroundColor={backgroundColor}
          >
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="110" />
          </ContentLoader>
          <ContentLoader
            viewBox="0 0 270 110"
            backgroundColor={backgroundColor}
          >
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="110" />
          </ContentLoader>
          <ContentLoader
            viewBox="0 0 270 110"
            backgroundColor={backgroundColor}
          >
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="110" />
          </ContentLoader>
          <ContentLoader
            viewBox="0 0 270 110"
            backgroundColor={backgroundColor}
          >
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="110" />
          </ContentLoader>
        </StatOverview>
      </ContainerLoader>
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
    </HomepageLoaderContainer>
  );
};

export default HomepageLoader;

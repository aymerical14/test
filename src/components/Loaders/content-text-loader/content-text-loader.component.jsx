import React from "react";
import ContentLoader from "react-content-loader";

const ContentTextLoader = ({ backgroundColor = "#f5f6f7" }) => (
  <ContentLoader viewBox="0 0 1000 180" backgroundColor={backgroundColor}>
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="35" />
    <rect x="0" y="50" rx="5" ry="5" width="100%" height="35" />
    <rect x="0" y="100" rx="5" ry="5" width="100%" height="35" />
    <rect x="0" y="150" rx="5" ry="5" width="100%" height="35" />
  </ContentLoader>
);

export default ContentTextLoader;
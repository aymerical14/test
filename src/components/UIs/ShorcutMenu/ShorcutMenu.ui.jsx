import React from "react";
import Icon from "@iconify/react";

import arrowRightShort from "@iconify/icons-bi/arrow-right-short";

import {
  MediaContainer,
  MediaImg,
  MediaLink,
  MediaLinkIcon,
  MediaLinkText,
  MediaText,
  MediaTitle,
} from "./ShorcutMenu.styles";

const ShorcutMenu = ({ icon, bgIcon, title, description, link, linkText }) => {
  return (
    <MediaContainer className="media">
      <MediaImg bgIcon={bgIcon} className="align-self-start mr-3">
        <Icon icon={icon} style={{ color: "#fff", fontSize: "46px" }} />
      </MediaImg>

      <div className="media-body">
        <MediaTitle className="mt-0">{title}</MediaTitle>
        <MediaText>{description}</MediaText>
        <MediaLink to={link}>
          <MediaLinkText>{linkText}</MediaLinkText>
          <MediaLinkIcon>
            <Icon
              icon={arrowRightShort}
              style={{ color: "#fff", fontSize: "34px" }}
            />
          </MediaLinkIcon>
        </MediaLink>
      </div>
    </MediaContainer>
  );
};

export default ShorcutMenu;

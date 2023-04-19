import styled from "styled-components";
import { Link } from "react-router-dom";

export const MediaContainer = styled.div`
  min-height: 160px;
  padding: 25px;
  justify-content: flex-start;
`;

export const MediaImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    if (props.bgIcon) {
      return props.bgIcon;
    }

    return "#ccc";
  }};
`;

export const MediaTitle = styled.h5`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #000;
  margin-bottom: 6px;
`;

export const MediaText = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-bottom: 18px;
`;

export const MediaLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #fff;
  height: 35px;
  background-color: #f16e00;
  text-decoration: none !important;
  transition: background-color 0.3s, color 0.3s;
  white-space: nowrap;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const MediaLinkIcon = styled.div`
  display: flex;
  position: relative;
  height: 35px;
  align-items: center;
  justify-content: center;
  flex: 0 0 35px;
`;

export const MediaLinkText = styled.div`
  display: flex;
  min-height: 35px;
  padding: 5px 20px 5px 18px;
  align-items: center;
  flex: 1 1 auto;
`;

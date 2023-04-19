import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;

  @media screen and (max-width: 539px) {
    font-size: 14px;
  }

  @media screen and (max-width: 479px) {
    font-size: 18px;
  }
`;

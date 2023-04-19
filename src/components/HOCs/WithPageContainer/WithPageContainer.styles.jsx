import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #fffdfa;
  padding-top: 75px;

  @media screen and (max-width: 702px) {
    padding-top: unset;
  }
`;

export const ContainerContent = styled.div`
  padding-left: 250px;
  padding-bottom: 50px;
  overflow: hidden;
  overflow-y: auto;
  height: calc(100vh - 75px);
`;

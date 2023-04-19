import styled from "styled-components";

export const HomepageLoaderContainer = styled.div``;

export const TopLoader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  border-bottom: 1px solid #f6ece1;

  & > svg {
    width: 49%;
  }
`;

export const ContainerLoader = styled.div`
  padding: 18px 25px 18px 25px;
`;

export const StatOverview = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > svg:not(:last-child) {
    margin-right: 20px;

    @media screen and (max-width: 865px) {
      margin-right: unset;
    }
  }

  > svg {
    width: calc(25% - 15px);

    @media screen and (max-width: 1366px) {
      width: calc(50% - 30px);
      margin-bottom: 15px;
    }

    @media screen and (max-width: 865px) {
      width: 100%;
    }
  }
`;

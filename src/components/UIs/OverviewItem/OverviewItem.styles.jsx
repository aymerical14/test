import styled from "styled-components";

export const OverviewContainer = styled.div`
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 7px;
  box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.06);
  min-height: 110px;
  display: flex;
  align-items: center;
`;

export const OverviewRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > div:last-child {
    margin-left: 16px;
  }
`;

export const OverviewLabel = styled.div`
  font-weight: normal;
  font-size: 14px;
  color: #000;
  margin-bottom: 7px;
`;

export const OverviewValue = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #000;
  white-space: nowrap;
`;

export const OverviewPreview = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    if (props.bgIcon) {
      return "rgba(" + props.bgIcon + ", 0.14)";
    }

    return "#ccc";
  }};
`;

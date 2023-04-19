import styled from "styled-components";

export const BadgeContainer = styled.span`
  width: 75px;
  height: 23px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  background-color: ${(props) => {
    if (props.bgColor) return props.bgColor;

    if (props.type) {
      if (props.type === "success") return "#56C382";

      if (props.type === "danger") return "#CD3C14";

      if (props.type === "warning") return "#fc0";
    }

    return "#949494";
  }};
`;

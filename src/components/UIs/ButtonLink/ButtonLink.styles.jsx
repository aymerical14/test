import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const styleButton = css`
  border-radius: 3px;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 0.04em;
  padding: 0 32px;
  display: inline-flex;
  align-items: center;
  color: #fff !important;
  background-color: #f16e00 !important;
  border: none;
  text-decoration: none !important;

  height: ${(props) => {
    if (props.btnstyletype && props.btnstyletype === "slim") {
      return "32px";
    }

    return "40px";
  }};

  text-transform: ${(props) => {
    if (props.uppercase === "true") {
      return "uppercase";
    }

    return "none";
  }};

  box-shadow: ${(props) => {
    if (props.shadow) {
      if (props.shadow === "shadow-sm")
        return `0px 4px 12px rgba(163, 116, 96, 0.3)`;

      if (props.shadow === "shadow-lg")
        return `0px 101px 80px rgba(0, 0, 0, 0.07),
      0px 42.1954px 33.4221px rgba(0, 0, 0, 0.0543167),
      0px 22.5597px 17.869px rgba(0, 0, 0, 0.0514083),
      0px 12.6468px 10.0172px rgba(0, 0, 0, 0.0477214),
      0px 6.7166px 5.32008px rgba(0, 0, 0, 0.0399575),
      0px 2.79493px 2.21381px rgba(0, 0, 0, 0.0253409)`;
    }

    return "unset";
  }};
`;

export const Button = styled.button`
  ${styleButton}
`;

export const LinkButton = styled(Link)`
  ${styleButton}
`;

import styled from "styled-components";

export const Select = styled.select`
  &:focus {
    box-shadow: none !important;
  }
`;

export const CustomSelectContainer = styled.div`
  position: relative;
  padding: 0;
  height: 40px;
  border: none !important;
  width: ${(props) => (props.width ? props.width : "100%")};

  .dropdown-select-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 14px;
  }
`;

export const CustomSelect = styled.select`
  appearance: none;
  background: #fff;
  color: #29303b;
  border-radius: 0;
  font-size: 14px;
  height: 40px !important;
  border: none;
  padding-left: 18px;
  font-weight: normal;
  border: 2px solid #eee;
  width: "100%";
  border-radius: 3px 0 0 3px;
  
  &:focus {
    background: #eee;
    border: 2px solid #eee;
    box-shadow: none !important;
  }
`;

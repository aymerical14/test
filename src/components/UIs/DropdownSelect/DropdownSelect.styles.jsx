import styled from "styled-components";

export const DropdownSelectContainer = styled.div`
  position: relative;
  width: 244px;
  height: 40px;
  font-size: 14px;
  background: #f3f3f4;

  .dropdown-select-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 14px;
  }
`;

export const DropdownSelector = styled.select`
  appearance: none;
  background: transparent;
  height: 40px;
  color: #000;
  border: none;
  font-weight: bold;
  width: 100%;
  padding: 0 15px;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;

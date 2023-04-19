import styled from "styled-components";

export const FormFilterContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  height: ${(props) => (props.height ? props.height : "32px")};
  background-color: transparent;
  transition: background-color 0.1s ease-in-out;
  cursor: pointer;
  max-width: 100%;

  &:hover,
  &:focus,
  &.show {
    background-color: #e2e2e2;
  }
`;

export const FormFilterButton = styled.button`
  font-weight: normal;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.55);
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
  padding: 7px 12px 7px 12px;
  width: 100%;
  height: ${(props) => (props.height ? props.height : "32px")};
  border-radius: 3px;

  &::after {
    color: rgba(0, 0, 0, 0.55);
  }
`;

export const FormFilterSpan = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-weight: bold;
  color: #000;
  white-space: nowrap;
`;

export const DropDownMenu = styled.div`
  border: none;
  padding-top: 8px;
  padding-bottom: 8px;
  min-width: 12rem;
`;

export const DropDownMenuItem = styled.button`
  font-weight: normal;
  font-size: 14px;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: #f4f4f4;
    color: #000;
  }
`;

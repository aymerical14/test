import styled from "styled-components";

export const FormFilterDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 32px;
  width: 100%;
  background-color: transparent;
  border-radius: 3px;
  transition: background-color 0.1s ease-in-out;
  cursor: pointer;
  max-width: 100%;

  &:hover,
  &:focus,
  &.show {
    background-color: #e2e2e2;
  }
`;

export const FormFilterDateButton = styled.button`
  font-weight: normal;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.55);
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: #fff;
  padding: 7px 12px 7px 12px;
  width: 100%;
  height: 32px;
  border-radius: 3px;

  &::after {
    color: rgba(0, 0, 0, 0.55);
  }
`;

export const FormFilterDateSpan = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-weight: bold;
  color: #000;
  white-space: nowrap;
`;

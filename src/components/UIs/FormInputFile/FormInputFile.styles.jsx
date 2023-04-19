import styled from "styled-components";

export const FormInputLabel = styled.label``;

export const FormInputFileContainer = styled.div`
  width: 100%;
  min-height: 140px;
  background: #f5f5f5;
  border: 2px dashed rgba(0, 0, 0, 0.14);
  border-radius: 7px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const InputFile = styled.input`
  display: none;
`;

export const FilenameContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.47);
    margin-bottom: 10px;
  }
`;

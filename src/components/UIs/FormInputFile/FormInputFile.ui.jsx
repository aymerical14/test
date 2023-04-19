import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

import plusCircleFilled from "@iconify/icons-ant-design/plus-circle-filled";
import plusIcon from "@iconify/icons-akar-icons/plus";

import isEmpty from "../../../utils/isEmpty";

import {
  FilenameContainer,
  FormInputFileContainer,
  FormInputLabel,
  IconContainer,
  InputFile,
} from "./FormInputFile.styles";

const FormInputFile = ({
  className,
  label,
  onChange,
  name,
  onBlur,
  filename,
  value,
  placeholder = "Cliquer pour ajouter",
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const triggerInputFile = () => inputFileRef.current.click();
  const inputFileRef = useRef(null);

  useEffect(() => {
    if (typeof value === "string") {
      setSelectedFile(null);

      inputFileRef.current.value = "";
    }
  }, [value]);

  return (
    <React.Fragment>
      {label ? (
        <FormInputLabel className="form-input-label">{label}</FormInputLabel>
      ) : null}
      <FormInputFileContainer onClick={triggerInputFile}>
        <InputFile
          name={name}
          onBlur={onBlur}
          ref={inputFileRef}
          className={`${className}`}
          type="file"
          onChange={(event) => {
            setSelectedFile(event.target.files[0]);
            onChange(event.target.files[0]);
          }}
        />

        {selectedFile ? (
          <FilenameContainer>{selectedFile.name}</FilenameContainer>
        ) : !isEmpty(filename) ? (
          <FilenameContainer>{filename}</FilenameContainer>
        ) : (
          <IconContainer>
            <span className="mr-1">{placeholder}</span>
            <div>
              <Icon
                style={{ fontSize: "24px" }}
                color="#F16E00"
                icon={plusIcon}
              />
            </div>
          </IconContainer>
        )}
      </FormInputFileContainer>
    </React.Fragment>
  );
};

FormInputFile.defaultProps = {
  className: "",
  label: "",
  name: "",
  filename: "",
  onChange: () => {},
  onBlur: () => {},
};

FormInputFile.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  filename: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default FormInputFile;

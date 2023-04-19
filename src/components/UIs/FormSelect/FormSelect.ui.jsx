import React from "react";
import { Icon } from "@iconify/react";

import caretDownFill from "@iconify/icons-bi/caret-down-fill";

import { CustomSelectContainer, CustomSelect } from "./FormSelect.styles";

const FormSelect = ({
  handleChange,
  label,
  options,
  placeholder,
  ...otherProps
}) => {
  delete otherProps.dispatch;

  return (
    <React.Fragment>
      {label ? <label className="form-input-label">{label}</label> : null}
      <CustomSelectContainer width={'65% !important'}>
        <CustomSelect
          value={otherProps.value}
          onChange={handleChange}
          {...otherProps}
        >
          <option value="">{placeholder}</option>
          {options.map((option, key) => (
            <option key={key} value={option.value}>
              {option.label}
            </option>
          ))}
        </CustomSelect>
        <Icon
          icon={caretDownFill}
          className="dropdown-select-icon"
          style={{ color: "#000" }}
        />
      </CustomSelectContainer>
    </React.Fragment>
  );
};

export default FormSelect;

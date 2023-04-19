import React from "react";
import { v4 as uuidv4 } from "uuid";

import { CheckboxContainer, CheckboxLabel } from "./FormRadio.styles";

const FormRadio = ({ handleChange, checked, name, label, ...props }) => {
  const id = `${name}-${uuidv4()}`;

  return (
    <CheckboxContainer className="custom-control custom-radio">
      <input
        name={name}
        type="radio"
        className="custom-control-input"
        id={id}
        onChange={handleChange}
        checked={checked}
        {...props}
      />
      <CheckboxLabel className="custom-control-label" htmlFor={id}>
        {label}
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default FormRadio;

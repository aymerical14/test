import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import caretDownFill from "@iconify/icons-bi/caret-down-fill";

import {
  DropdownSelectContainer,
  DropdownSelector,
} from "./DropdownSelect.styles";

const DropdownSelect = ({ values = [], handleSelect = () => {}, value }) => {
  const [state, setState] = useState({
    values: [],
    value: 10,
  });

  useEffect(() => {
    setState({ ...state, values: values, value: value });
  }, [values, value]);

  const handleChange = (e) => {
    handleSelect(e.target.value);
    setState({ ...state, value: e.target.value });
  };

  return (
    state.values.length > 0 && (
      <DropdownSelectContainer>
        <DropdownSelector onChange={handleChange} value={state.value}>
          {state.values.map((value, key) => (
            <option key={key} value={value.value}>
              {value.name}
            </option>
          ))}
        </DropdownSelector>
        <Icon
          icon={caretDownFill}
          className="dropdown-select-icon"
          style={{ color: "#000" }}
        />
      </DropdownSelectContainer>
    )
  );
};

export default DropdownSelect;

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { InputContainer } from "./FormInputDatePicker.styles";

const FormInputDatePicker = ({
  onChange,
  label,
  selected = null,
  showTimeSelect = false,
  dateFormat = "dd/MM/yyyy",
  ...otherProps
}) => {
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    setStartDate(selected);
  }, [selected]);

  const handleChange = (date) => {
    onChange(date);
  };

  return (
    <React.Fragment>
      {label ? <label className="form-input-label">{label}</label> : null}
      <InputContainer>
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          showTimeSelect={showTimeSelect}
          dateFormat={dateFormat}
          {...otherProps}
        />
      </InputContainer>
    </React.Fragment>
  );
};

export default FormInputDatePicker;

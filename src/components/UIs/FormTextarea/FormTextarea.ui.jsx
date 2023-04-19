import React from "react";

import { Textarea } from "./FormTextarea.styles";

const FormTextarea = React.forwardRef(
  ({ handleChange, label, ...otherProps }, ref) => {
    delete otherProps.dispatch;

    return (
      <React.Fragment>
        {label ? <label className="form-input-label">{label}</label> : null}
        <Textarea onChange={handleChange} {...otherProps} ref={ref} />
      </React.Fragment>
    );
  }
);

export default FormTextarea;

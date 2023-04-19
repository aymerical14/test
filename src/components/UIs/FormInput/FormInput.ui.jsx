import React, { useState } from "react";
import { Icon } from "@iconify/react";
import InputMask from "react-input-mask";

import eyeHideSolid from "@iconify/icons-clarity/eye-hide-solid";
import eyeShowSolid from "@iconify/icons-clarity/eye-show-solid";

import { Input } from "./FormInput.styles";

const FormInput = React.forwardRef(
  (
    { handleChange, type, label, isInputMask, showable = false, ...otherProps },
    ref
  ) => {
    delete otherProps.dispatch;

    if (!isInputMask) {
      delete otherProps.mask;
      delete otherProps.alwaysShowMask;
      delete otherProps.maskChar;
    }

    const [show, setShow] = useState(false);

    const showPassword = (e) => {
      e.preventDefault();

      setShow(true);
    };

    const hidePassword = (e) => {
      e.preventDefault();

      setShow(false);
    };

    return (
      <React.Fragment>
        {label ? <label className="form-input-label">{label}</label> : null}
        {type !== "password" ? (
          !isInputMask ? (
            <Input
              type={type ? type : "text"}
              onChange={handleChange}
              {...otherProps}
              ref={ref}
            />
          ) : (
            <InputMask onChange={handleChange} {...otherProps} />
          )
        ) : showable ? (
          <div className="input-group">
            <Input
              type={show ? "text" : "password"}
              onChange={handleChange}
              {...otherProps}
              ref={ref}
            />
            <div className="input-group-append">
              <button
                className="btn"
                type="button"
                onMouseDown={showPassword}
                onMouseUp={hidePassword}
                onMouseLeave={hidePassword}
              >
                <Icon
                  icon={!show ? eyeShowSolid : eyeHideSolid}
                  style={{ color: "#000", fontSize: "1.1em" }}
                />
              </button>
            </div>
          </div>
        ) : (
          <Input
            type="password"
            onChange={handleChange}
            {...otherProps}
            ref={ref}
          />
        )}
      </React.Fragment>
    );
  }
);

export default FormInput;

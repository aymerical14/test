import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { InlineIcon } from "@iconify/react";
import $ from "jquery";
import daterangepicker from "daterangepicker/daterangepicker";

import bxCalendar from "@iconify/icons-bx/bx-calendar";

import "daterangepicker/daterangepicker.css";

import {
  FormFilterDateButton,
  FormFilterDateContainer,
  FormFilterDateSpan,
} from "./FormFilterDateRange.styles";

const FormFilterDateRange = ({
  label,
  onChange = () => {},
  placeholder = "Tout",
  style = {},
  backgroundColor = "#fff",
  height = null,
  className = "",
}) => {
  const textDateRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    $(inputRef.current).daterangepicker(
      {
        opens: "left",
      },
      callback
    );
  }, [inputRef.current]);

  const callback = (start, end, label) => {
    textDateRef.current.innerHTML =
      start.format("DD/MM/YYYY") + " - " + end.format("DD/MM/YYYY");

    onChange({
      start: start,
      end: end,
    });
  };

  return (
    <FormFilterDateContainer
      height={height}
      className={classnames("dropdown", className)}
      height={height}
      style={{ ...style }}
    >
      <FormFilterDateButton
        height={height}
        backgroundColor={backgroundColor}
        type="button"
        ref={inputRef}
      >
        {label}:
        <FormFilterDateSpan ref={textDateRef}>{placeholder}</FormFilterDateSpan>{" "}
        <InlineIcon
          icon={bxCalendar}
          color="#000"
          className="ml-1"
          style={{ fontSize: "20px" }}
        />
      </FormFilterDateButton>
    </FormFilterDateContainer>
  );
};

FormFilterDateRange.defaultProps = {
  label: "",
  onChange: () => {},
};

FormFilterDateRange.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormFilterDateRange;

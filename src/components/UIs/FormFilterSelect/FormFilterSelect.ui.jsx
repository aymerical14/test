import PropTypes from "prop-types";
import classnames from "classnames";

import isEmpty from "../../../utils/isEmpty";

import "daterangepicker/daterangepicker.css";

import {
  DropDownMenu,
  DropDownMenuItem,
  FormFilterButton,
  FormFilterContainer,
  FormFilterSpan,
} from "./FormFilterSelect.styles";

const FormFilterSelect = ({
  options,
  label,
  onChange,
  value,
  noPlaceholder,
  placeholder = "Tout",
  style = {},
  backgroundColor = "#fff",
  height = null,
  className = "",
  withoutLabel
}) => {
  return (
    <FormFilterContainer
      height={height}
      className={classnames("dropdown", className)}
      style={{ ...style }}
    >
      <FormFilterButton
        className="dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        backgroundColor={backgroundColor}
        height={height}
      >
        {withoutLabel ? label : label +":"}
        <FormFilterSpan>
          {isEmpty(value)
            ? placeholder
            : options.find((opt) => opt.value === value).label}
        </FormFilterSpan>
      </FormFilterButton>
      <DropDownMenu
        className="dropdown-menu dropdown-menu-right shadow"
        aria-labelledby="dropdownMenuButton"
      >
        {!noPlaceholder && !isEmpty(value) && (
          <DropDownMenuItem
            className="btn btn-link dropdown-item"
            value=""
            onClick={onChange}
          >
            {placeholder}
          </DropDownMenuItem>
        )}
        {options
          .filter((opt) => opt.value !== value)
          .map((option, key) => (
            <DropDownMenuItem
              className="btn btn-link dropdown-item"
              key={key}
              value={option.value}
              onClick={onChange}
            >
              {option.label}
            </DropDownMenuItem>
          ))}
      </DropDownMenu>
    </FormFilterContainer>
  );
};

FormFilterSelect.defaultProps = {
  label: "",
  options: [],
  onChange: () => {},
};

FormFilterSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default FormFilterSelect;

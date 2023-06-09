import React from "react";
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownMenuContainer,
} from "./TableDropdown.styles";

const TableDropdown = ({ actions = [], item }) => {
  return (
    <DropdownContainer className="dropdown">
      <DropdownButton
        className="btn dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        // id="dropdownMenuButton"
      >
        <span>...</span>
      </DropdownButton>
      <DropdownMenuContainer
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton"
      >
        {actions.map((action, index) =>
          action.isVisible(item) === true ? (
            <DropdownItem
              key={index}
              className="dropdown-item"
              href="#!"
              onClick={(e) => action.action(e, item)}
            >
              {action.label}
            </DropdownItem>
          ) : null
        )}
        
      </DropdownMenuContainer>
    </DropdownContainer>
  );
};

export default TableDropdown;

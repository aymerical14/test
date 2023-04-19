import React from "react";

import { Button, LinkButton } from "./ButtonLink.styles";

const ButtonLink = ({
  type = "button",
  shadow = "",
  btnstyletype = "",
  children,
  className,
  uppercase = false,
  to = "!#",
  ...props
}) => {
  return (
    <>
      {(type === "button" || type === "submit") && (
        <Button
          className={className}
          uppercase={uppercase.toString()}
          shadow={shadow}
          type={type}
          btnstyletype={btnstyletype}
          {...props}
        >
          {children}
        </Button>
      )}
      {type === "link" && (
        <LinkButton
          to={to}
          uppercase={uppercase.toString()}
          className={className}
          shadow={shadow}
          btnstyletype={btnstyletype}
          {...props}
        >
          {children}
        </LinkButton>
      )}
    </>
  );
};

export default ButtonLink;

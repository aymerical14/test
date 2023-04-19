import React from "react";
import { Icon } from "@iconify/react";

import {
  Button,
  LinkButton,
  ClassicLinkButton,
  ClassicLink,
  Span,
} from "./ButtonOrange.styles";

const ButtonOrange = ({
  children,
  typebutton = "button",
  classbutton = "primary",
  icon = null,
  ...props
}) => {
  return typebutton === "button" ? (
    <Button icon={icon} classbutton={classbutton} {...props}>
      {children}
      {icon && (
        <Span>
          <Icon icon={icon} color="#F16E00" style={{ fontSize: "24px" }} />
        </Span>
      )}
    </Button>
  ) : typebutton === "link" ? (
    <LinkButton icon={icon} classbutton={classbutton} {...props}>
      {children}
      {icon && (
        <Span>
          <Icon icon={icon} color="#F16E00" style={{ fontSize: "24px" }} />
        </Span>
      )}
    </LinkButton>
  ) : typebutton === "classic-link" ? (
    <ClassicLinkButton icon={icon} classbutton={classbutton} {...props}>
      {children}
      {icon && (
        <Span>
          <Icon icon={icon} color="#F16E00" style={{ fontSize: "24px" }} />
        </Span>
      )}
    </ClassicLinkButton>
  ) : (
    <ClassicLink {...props}>{children}</ClassicLink>
  );
};

export default ButtonOrange;

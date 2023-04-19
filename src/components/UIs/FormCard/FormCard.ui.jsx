import React from "react";

import { FormCardContainer } from "./FormCard.styles";

const FormCard = ({ children, className }) => {
  return (
    <FormCardContainer className={className}>{children}</FormCardContainer>
  );
};

export default FormCard;

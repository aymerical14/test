import React from "react";

import {
  Button,
  ErrorLoadingContainer,
  ErrorText,
} from "./ErrorLoading.styles";

const ErrorLoading = ({
  errorText = "",
  actionText = "",
  actionClick = () => {},
}) => {
  return (
    <ErrorLoadingContainer>
      <img
        src={require("./error-content-illustration.svg").default}
        className="img-fluid"
        style={{ maxWidth: "428px" }}
      />
      {errorText.length > 0 && <ErrorText>{errorText}</ErrorText>}
      {actionText.length > 0 && (
        <Button onClick={actionClick}>{actionText}</Button>
      )}
    </ErrorLoadingContainer>
  );
};

export default ErrorLoading;

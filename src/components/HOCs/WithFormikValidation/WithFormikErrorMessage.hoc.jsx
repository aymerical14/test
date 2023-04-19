import React from "react";
import { getIn } from "formik";

const WithFormikErrorMessage = (WrappedComponent) => ({
  errors,
  touched,
  name,
  ...otherProps
}) => {
  const error = getIn(errors, name);
  const touch = getIn(touched, name);

  return touch && error ? (
    <WrappedComponent message={error} {...otherProps} />
  ) : null;
};

export default WithFormikErrorMessage;

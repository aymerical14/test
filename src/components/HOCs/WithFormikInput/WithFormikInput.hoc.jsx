import React from "react";

const WithFormikInput = (WrappedComponent) => ({
  setFieldValue,
  name,
  value,
  ...props
}) => {
  return (
    <WrappedComponent
      selected={(value && new Date(value)) || null}
      onChange={(val) => {
        setFieldValue(name, val);
      }}
      value={value}
      name={name}
      {...props}
    />
  );
};

export default WithFormikInput;

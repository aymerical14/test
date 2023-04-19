import React from "react";

import isEmpty from "../../../utils/isEmpty";

import "./Container.styles.scss";

const Container = ({ title, children }) => {
  return (
    <div className="l-container">
      {!isEmpty(title) && <h2 className="container-title">{title}</h2>}
      {children}
    </div>
  );
};

export default Container;

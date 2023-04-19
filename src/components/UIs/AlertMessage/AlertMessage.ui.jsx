import React from "react";

import { MessageContainer } from "./AlertMessage.styles";

const AlertMessage = ({ typeError = "danger", message }) => (
  <div
    className={`alert alert-sm alert-${typeError} p-0 mt-0 mb-0`}
    role="alert"
  >
    <span className="alert-icon">
      <span className="sr-only">Danger</span>
    </span>
    <MessageContainer>{message}</MessageContainer>
  </div>
);

export default AlertMessage;

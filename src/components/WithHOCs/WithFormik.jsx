import WithFormikInput from "../HOCs/WithFormikInput/WithFormikInput.hoc";
import WithFormikErrorMessage from "../HOCs/WithFormikValidation/WithFormikErrorMessage.hoc";

import AlertMessage from "../UIs/AlertMessage/AlertMessage.ui";
import FormInputDatePicker from "../UIs/FormInputDatePicker/FormInputDatePicker.ui";

export const WithFormikDisplayAlertMessage = WithFormikErrorMessage(
  AlertMessage
);

export const WithFormikDatePicker = WithFormikInput(FormInputDatePicker);
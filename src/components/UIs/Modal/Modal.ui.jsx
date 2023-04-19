import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import {
  CloseButton,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./Modal.styles";

const Form = ({
  onClose,
  onSubmit,
  children,
  upload,
  isLoading,
  hideFooter,
  footerValidateText,
  footerCloseText,
}) => (
  <form
    onSubmit={onSubmit}
    encType={`${
      upload === true
        ? "multipart/form-data"
        : "application/x-www-form-urlencoded"
    }`}
  >
    {children}
    {!hideFooter && (
      <ModalFooter className="modal-footer">
        <button
          onClick={onClose}
          type="button"
          className="btn btn-secondary"
          disabled={isLoading}
        >
          {footerCloseText}
        </button>
        <button
          onClick={onSubmit}
          type="button"
          className={classNames("btn btn-primary ld-ext-right ", {
            running: isLoading,
          })}
          disabled={isLoading}
        >
          {footerValidateText}
          <div className="ld ld-ring ld-spin"></div>
        </button>
      </ModalFooter>
    )}
  </form>
);

Form.defaultProps = {
  upload: false,
};

Form.propTypes = {
  upload: PropTypes.bool,
};

const Content = ({ children }) => <React.Fragment>{children}</React.Fragment>;

const ModalCustom = ({
  form,
  visible,
  handleModal,
  handleSubmit,
  title,
  children,
  hideFooter = false,
  footerValidateText = "Valider",
  footerCloseText = "Fermer",
  upload,
  isLoading,
  className = "",
}) => {
  const content = (
    <React.Fragment>
      <ModalHeader className="modal-header">
        <ModalTitle className="modal-title">{title}</ModalTitle>
        <CloseButton
          onClick={handleModal}
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </CloseButton>
      </ModalHeader>
      <ModalBody className="modal-body">{children}</ModalBody>
    </React.Fragment>
  );

  return createPortal(
    <ModalContainer
      className={className}
      visible={visible}
      onClickBackdrop={handleModal}
    >
      {form ? (
        <Form
          onClose={handleModal}
          onSubmit={handleSubmit}
          upload={upload}
          isLoading={isLoading}
          hideFooter={hideFooter}
          footerValidateText={footerValidateText}
          footerCloseText={footerCloseText}
        >
          {content}
        </Form>
      ) : (
        <Content>{content}</Content>
      )}
    </ModalContainer>,
    document.body
  );
};

ModalCustom.defaultProps = {
  upload: false,
};

ModalCustom.propTypes = {
  upload: PropTypes.bool,
};

export default ModalCustom;

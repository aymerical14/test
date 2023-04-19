import Modal from "react-bootstrap4-modal";
import styled from "styled-components";

export const ModalContainer = styled(Modal)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1072;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;

  @media (min-width: 1200px) {
    &.modal-xl .modal-dialog {
      max-width: 1140px;
    }
  }

  .modal-dialog {
    position: relative;
    width: auto;
    pointer-events: none;

    @media (min-width: 480px) {
      max-width: 700px;
      margin: 1.875rem auto;
    }
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    border: 0;
    position: relative;
    width: 100%;
    color: #000;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 0;
    //overflow: hidden;
    outline: 0;
    padding: 0;
    padding: 1.875rem;
  }
`;

export const CloseButton = styled.button`
  margin-right: 0;
`;

export const ModalHeader = styled.div`
  .modal-header {
    position: relative;
    background: #000;
    min-height: 1.25rem;
    padding: 2.5rem;
    border: 0;
    margin: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const ModalTitle = styled.h5`
  margin-bottom: 0;
  line-height: 1.25;
  font-size: 30px;
  font-weight: 700;
  color: #000;
`;

export const ModalBody = styled.div``;

export const ModalFooter = styled.div`
  .btn-primary {
    color: #fff !important;
  }
`;

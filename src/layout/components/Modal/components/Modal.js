import React from 'react';
import PropTypes from 'prop-types';

import CloseButton from 'lib/CloseButton';
import { Dialog, Content } from '../styles/Modal.styles';

const Modal = ({ open, mobile, children, onClickClose, onKeyDownClose }) => (
  <>
    <Dialog
      isOpen={open}
      mobile={mobile}
      onDismiss={onClickClose}
      aria-label="Class Description"
    >
      <CloseButton onClick={onClickClose} onKeyDown={onKeyDownClose} />
      <Content>{children}</Content>
    </Dialog>
  </>
);

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  mobile: PropTypes.bool.isRequired,
  children: PropTypes.node,
  onClickClose: PropTypes.func.isRequired,
  onKeyDownClose: PropTypes.func.isRequired,
};
Modal.defaultProps = {
  children: false,
};

export default Modal;

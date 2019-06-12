import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ModalWrapper, Overlay } from '../styles/Modal.styles';

const Modal = ({
  open, mobile, children, onClickClose, onKeyDownClose,
}) => (
  <Fragment>
    {open && <ModalWrapper mobile={mobile}>{children}</ModalWrapper>}
    <Overlay
      visible={open}
      onClick={open ? onClickClose : undefined}
      onKeyDown={onKeyDownClose}
      tabIndex={open ? 0 : -1}
    />
  </Fragment>
);

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  mobile: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClickClose: PropTypes.func.isRequired,
  onKeyDownClose: PropTypes.func.isRequired,
};

export default Modal;

import React from 'react';
import PropTypes from 'prop-types';

import {
  ModalWrapper,
  Content,
  CloseIcon,
  Overlay,
} from '../styles/Modal.styles';

const Modal = ({
  open, mobile, children, onClickClose, onKeyDownClose,
}) => (
  <>
    {open && (
      <ModalWrapper mobile={mobile}>
        <CloseIcon
          onClick={onClickClose}
          onKeyDown={onKeyDownClose}
          tabIndex={0}
        />
        <Content>{children}</Content>
      </ModalWrapper>
    )}
    <Overlay
      visible={open}
      onClick={open ? onClickClose : undefined}
      onKeyDown={onKeyDownClose}
      tabIndex={open ? 0 : -1}
    />
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

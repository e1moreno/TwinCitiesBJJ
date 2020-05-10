import React, { useContext, useCallback } from 'react';

import onKeyHelper from 'utils/onKeyHelper';
import { useWindowSize } from 'lib/WindowSize';

import {
  ModalStateContext,
  ModalDispatchContext,
  closeModal,
} from '../context/ModalContextProvider';
import Modal from '../components/Modal';

const ModalContainer = () => {
  const dispatch = useContext(ModalDispatchContext);
  const { ModalComponent, props } = useContext(ModalStateContext);

  const { mobile } = useWindowSize();
  const validModal = !!ModalComponent;

  const handleCloseClick = useCallback(() => closeModal(dispatch), [dispatch]);

  const handleCloseKeyDown = useCallback(
    (e) => {
      onKeyHelper(e, () => closeModal(dispatch));
    },
    [dispatch],
  );

  return (
    <Modal
      open={validModal}
      mobile={mobile}
      onClickClose={handleCloseClick}
      onKeyDownClose={handleCloseKeyDown}
    >
      {validModal && <ModalComponent {...props} />}
    </Modal>
  );
};

export default ModalContainer;

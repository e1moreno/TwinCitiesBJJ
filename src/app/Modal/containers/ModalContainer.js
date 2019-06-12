import React, { useContext, useEffect, useCallback } from 'react';

import { ModalContext } from 'app/Modal/context/ModalContextProvider';
import onKeyHelper from 'utils/onKeyHelper';
import { useWindowSize } from 'design/WindowSize';

import { CourseModalContent } from 'app/CourseModalContent';

import Modal from '../components/Modal';

const MODAL_COMPONENTS = {
  COURSE_MODAL: CourseModalContent,
};

const ModalContainer = () => {
  const {
    open, modalType, props, dispatch,
  } = useContext(ModalContext);
  const { mobile } = useWindowSize();
  const ModalComponent = MODAL_COMPONENTS[modalType];
  const validModal = !!ModalComponent;

  useEffect(() => {
    if (validModal) {
      dispatch({ type: 'setOpen', open: validModal });
    }
  }, [validModal]);

  const handleCloseClick = useCallback(() => dispatch({ type: 'closeModal' }), [
    dispatch,
  ]);

  const handleCloseKeyDown = useCallback(
    (e) => {
      onKeyHelper(e, () => dispatch({ type: 'closeModal' }));
    },
    [dispatch],
  );

  return (
    <Modal
      open={open}
      mobile={mobile}
      onClickClose={handleCloseClick}
      onKeyDownClose={handleCloseKeyDown}
    >
      {validModal && <ModalComponent {...props} />}
    </Modal>
  );
};

export default ModalContainer;

import { useContext, useCallback } from 'react';

import { ModalContext } from 'app/Modal/context/ModalContextProvider';

const useCourseModal = () => {
  const { dispatch } = useContext(ModalContext);

  const handleOpenDrawer = useCallback((props) => {
    dispatch({ type: 'requestOpenModal', modalType: 'COURSE_MODAL', props });
  }, []);

  return handleOpenDrawer;
};

export default useCourseModal;

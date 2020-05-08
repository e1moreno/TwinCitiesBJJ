import { useContext, useCallback } from 'react';

import { ModalContext } from 'layout/components/Modal';

const useCourseModal = () => {
  const { dispatch } = useContext(ModalContext);

  const handleOpenDrawer = useCallback(
    (props) => {
      dispatch({ type: 'requestOpenModal', modalType: 'COURSE_MODAL', props });
    },
    [dispatch],
  );

  return handleOpenDrawer;
};

export default useCourseModal;

import { useContext, useCallback } from 'react';

import {
  ModalDispatchContext,
  requestOpenModal,
} from 'layout/components/Modal';

const useCourseModal = () => {
  const dispatch = useContext(ModalDispatchContext);

  const handleOpenDrawer = useCallback(
    (props) => {
      requestOpenModal(dispatch, 'COURSE_MODAL', props);
    },
    [dispatch],
  );

  return handleOpenDrawer;
};

export default useCourseModal;

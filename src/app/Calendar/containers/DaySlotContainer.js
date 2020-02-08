import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import onKeyHelper from 'utils/onKeyHelper';
import useCourseModal from './useCourseModal';
import Slot from '../components/Slot';

const DaySlotContainer = ({ data, ...props }) => {
  const handleModalOpen = useCourseModal();

  const handleClick = useCallback(() => handleModalOpen(data), [data, handleModalOpen]);

  const handleKeyDown = useCallback(
    (e) => {
      onKeyHelper(e, () => handleModalOpen(data));
    },
    [data, handleModalOpen],
  );

  return <Slot {...props} onClick={handleClick} onKeyDown={handleKeyDown} />;
};
DaySlotContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DaySlotContainer;

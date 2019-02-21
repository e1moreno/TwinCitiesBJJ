import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import MobileDay from '../components/MobileDay';

const MobileDayContainer = ({
  ind,
  day,
  selected,
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
  setCurrentDate,
}) => {
  const handleClick = useCallback(() => {
    if (!selected) {
      setCurrentDate(ind);
    }
  }, [ind, selected, setCurrentDate]);

  return (
    <MobileDay
      day={day}
      selected={selected}
      columnStart={columnStart}
      columnEnd={columnEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
      onClick={handleClick}
    />
  );
};

MobileDayContainer.propTypes = {
  ind: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  columnStart: PropTypes.number.isRequired,
  columnEnd: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  rowEnd: PropTypes.number.isRequired,
  setCurrentDate: PropTypes.func.isRequired,
};
MobileDayContainer.defaultProps = {
  selected: false,
};

export default MobileDayContainer;

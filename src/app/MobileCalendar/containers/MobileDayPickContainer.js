import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import onKeyHelper from 'utils/onKeyHelper';

import MobileDayPick from '../components/MobileDayPick';

const MobileDayPickContainer = ({
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

  const handleKeyDown = useCallback(
    (e) => {
      onKeyHelper(e, handleClick);
    },
    [handleClick],
  );

  return (
    <MobileDayPick
      day={day}
      selected={selected}
      columnStart={columnStart}
      columnEnd={columnEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    />
  );
};

MobileDayPickContainer.propTypes = {
  ind: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  columnStart: PropTypes.number.isRequired,
  columnEnd: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  rowEnd: PropTypes.number.isRequired,
  setCurrentDate: PropTypes.func.isRequired,
};
MobileDayPickContainer.defaultProps = {
  selected: false,
};

export default MobileDayPickContainer;

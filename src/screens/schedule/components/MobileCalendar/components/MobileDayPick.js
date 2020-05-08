import React from 'react';
import PropTypes from 'prop-types';

import { DaySelection } from '../styles/MobileDayPick.styles';

const MobileDayPick = ({
  day,
  selected,
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
  onClick,
  onKeyDown,
}) => (
  <DaySelection
    columnStart={columnStart}
    columnEnd={columnEnd}
    rowStart={rowStart}
    rowEnd={rowEnd}
    selected={selected}
    tabIndex={0}
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    {day.substring(0, 3)}
  </DaySelection>
);

MobileDayPick.propTypes = {
  day: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  columnStart: PropTypes.number.isRequired,
  columnEnd: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  rowEnd: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};
MobileDayPick.defaultProps = {
  selected: false,
};

export default MobileDayPick;

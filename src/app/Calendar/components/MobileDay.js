import React from 'react';
import PropTypes from 'prop-types';

import { DateSelection } from '../styles/MobileDay.styles';

const MobileDay = ({
  day,
  selected,
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
  onClick,
}) => (
  <DateSelection
    columnStart={columnStart}
    columnEnd={columnEnd}
    rowStart={rowStart}
    rowEnd={rowEnd}
    selected={selected}
    onClick={onClick}
  >
    {day}
  </DateSelection>
);

MobileDay.propTypes = {
  day: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  columnStart: PropTypes.number.isRequired,
  columnEnd: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  rowEnd: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
MobileDay.defaultProps = {
  selected: false,
};

export default MobileDay;

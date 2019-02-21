import React from 'react';
import PropTypes from 'prop-types';

import { SlotWrapper } from '../styles/Slot.styles';

const Slot = ({
  value,
  blank,
  header,
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
}) => (
  <SlotWrapper
    columnStart={columnStart}
    columnEnd={columnEnd}
    rowStart={rowStart}
    rowEnd={rowEnd}
    header={header}
    blank={blank}
  >
    {value}
  </SlotWrapper>
);
Slot.propTypes = {
  value: PropTypes.string,
  blank: PropTypes.bool,
  header: PropTypes.bool,
  columnStart: PropTypes.number.isRequired,
  columnEnd: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  rowEnd: PropTypes.number.isRequired,
};
Slot.defaultProps = {
  value: null,
  blank: false,
  header: false,
};

export default Slot;

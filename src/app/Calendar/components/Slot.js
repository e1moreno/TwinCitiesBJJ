import React from 'react';
import PropTypes from 'prop-types';

import {
  SlotWrapper,
  SlotContent,
  PrimaryText,
  SecondaryText,
} from '../styles/Slot.styles';

const Slot = ({
  primary,
  secondary,
  blank,
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
  onClick,
  onKeyDown,
}) => (
  <SlotWrapper
    columnStart={columnStart}
    columnEnd={columnEnd}
    rowStart={rowStart}
    rowEnd={rowEnd}
    blank={blank}
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    <SlotContent>
      <PrimaryText blank={blank}>{primary}</PrimaryText>
      {secondary && <SecondaryText>{secondary}</SecondaryText>}
    </SlotContent>
  </SlotWrapper>
);
Slot.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  blank: PropTypes.bool,
  columnStart: PropTypes.number.isRequired,
  columnEnd: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  rowEnd: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};
Slot.defaultProps = {
  primary: null,
  secondary: null,
  blank: false,
  onClick: null,
  onKeyDown: null,
};

export default Slot;

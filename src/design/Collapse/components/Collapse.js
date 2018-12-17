import React from 'react';
import PropTypes from 'prop-types';

import {
  CollapseWrapper,
  ReadButton,
  ButtonText,
  ExpandLess,
  ExpandMore,
} from '../styles/Collapse.style';

const Collapse = ({
  open, wrapperElement, onClick, onKeyDown, children,
}) => (
  <div>
    <CollapseWrapper
      open={open}
      {...!!wrapperElement && { as: wrapperElement }}
    >
      {children}
    </CollapseWrapper>
    <ReadButton onClick={onClick} onKeyDown={onKeyDown}>
      <ButtonText>{open ? 'Read Less' : 'Read More'}</ButtonText>
      {open ? <ExpandLess size="2em" /> : <ExpandMore size="2em" />}
    </ReadButton>
  </div>
);

Collapse.propTypes = {
  open: PropTypes.bool.isRequired,
  wrapperElement: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};
Collapse.defaultProps = {
  wrapperElement: null,
};

export default Collapse;

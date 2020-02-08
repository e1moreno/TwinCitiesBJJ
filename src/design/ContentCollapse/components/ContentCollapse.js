import React from 'react';
import PropTypes from 'prop-types';

import {
  CollapseWrapper,
  ReadButton,
  ButtonText,
  ExpandLess,
  ExpandMore,
} from '../styles/ContentCollapse.style';

const ContentCollapse = ({
  open,
  wrapperElement,
  onClick,
  onKeyDown,
  children,
}) => (
  <div>
    <CollapseWrapper
      open={open}
      {...(!!wrapperElement && { as: wrapperElement })}
    >
      {children}
    </CollapseWrapper>
    <ReadButton onClick={onClick} onKeyDown={onKeyDown}>
      <ButtonText>{open ? 'Read Less' : 'Read More'}</ButtonText>
      {open ? <ExpandLess size="2em" /> : <ExpandMore size="2em" />}
    </ReadButton>
  </div>
);

ContentCollapse.propTypes = {
  open: PropTypes.bool.isRequired,
  wrapperElement: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};
ContentCollapse.defaultProps = {
  wrapperElement: null,
};

export default ContentCollapse;

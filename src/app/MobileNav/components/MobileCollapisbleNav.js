import React, { Fragment, Children } from 'react';
import PropTypes from 'prop-types';

import {
  ControlButton,
  CollapseWrapper,
  ExpandLess,
  ExpandMore,
} from '../styles/MobileCollapsibleNav.styles';

const MobileCollapisbleNav = ({
  text,
  children,
  ariaExpanded,
  onClick,
  tabIndex,
}) => (
  <Fragment>
    <ControlButton
      aria-expanded={ariaExpanded}
      ariaExpanded={ariaExpanded}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {text} {ariaExpanded ? <ExpandLess /> : <ExpandMore />}
    </ControlButton>
    <CollapseWrapper open={ariaExpanded}>
      {Children.map(children, component => React.cloneElement(component, { tabIndex }))}
    </CollapseWrapper>
  </Fragment>
);

MobileCollapisbleNav.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  ariaExpanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MobileCollapisbleNav;

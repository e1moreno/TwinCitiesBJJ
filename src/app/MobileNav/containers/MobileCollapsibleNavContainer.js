import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import MobileCollapsibleNav from '../components/MobileCollapisbleNav';

const MobileCollapsibleNavContainer = ({ tabIndex, text, children }) => {
  const [ariaExpanded, setAriaExpanded] = useState(false);

  useEffect(() => {
    if (tabIndex === -1) {
      setAriaExpanded(false);
    }
  }, [tabIndex]);

  const toggleAriaExpanded = useCallback(() => {
    setAriaExpanded((ariaExpandedState) => !ariaExpandedState);
  }, []);

  return (
    <MobileCollapsibleNav
      tabIndex={tabIndex}
      text={text}
      ariaExpanded={ariaExpanded}
      onClick={toggleAriaExpanded}
    >
      {children}
    </MobileCollapsibleNav>
  );
};

MobileCollapsibleNavContainer.propTypes = {
  tabIndex: PropTypes.number,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
MobileCollapsibleNavContainer.defaultProps = {
  tabIndex: -1,
};

export default MobileCollapsibleNavContainer;

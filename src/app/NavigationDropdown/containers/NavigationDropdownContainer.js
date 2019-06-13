import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import NavigationDropdown from '../components/NavigationDropdown';

const NavigationDropdownContainer = ({ text, data }) => {
  const [ariaExpanded, setAriaExpanded] = useState(false);

  const setAriaExpandedFalse = useCallback(() => setAriaExpanded(false), []);

  const setAriaExpandedTrue = useCallback(() => setAriaExpanded(true), []);

  return (
    <NavigationDropdown
      text={text}
      data={data}
      ariaExpanded={ariaExpanded}
      onPopoverMount={setAriaExpandedTrue}
      onPopoverHide={setAriaExpandedFalse}
    />
  );
};

NavigationDropdownContainer.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default NavigationDropdownContainer;

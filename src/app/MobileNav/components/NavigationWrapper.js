import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from '../styles/NavigationWrapper.styles';

const NavigationWrapper = ({ open, children }) => {
  const tabIndex = open ? 0 : -1;

  return (
    <Wrapper>
      {Children.map(children, component => React.cloneElement(component, { tabIndex }))}
    </Wrapper>
  );
};

NavigationWrapper.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationWrapper;

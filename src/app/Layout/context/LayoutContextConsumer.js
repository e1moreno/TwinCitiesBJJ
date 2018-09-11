import React from 'react';
import PropTypes from 'prop-types';

import { LayoutContext } from './LayoutContextProvider';

const LayoutContextConsumer = ({ children }) => (
  <LayoutContext.Consumer>{children}</LayoutContext.Consumer>
);

LayoutContextConsumer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default LayoutContextConsumer;

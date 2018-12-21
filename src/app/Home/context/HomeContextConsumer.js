import React from 'react';
import PropTypes from 'prop-types';

import { HomeContext } from './HomeContextProvider';

const HomeContextConsumer = ({ children }) => (
  <HomeContext.Consumer>{children}</HomeContext.Consumer>
);

HomeContextConsumer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default HomeContextConsumer;

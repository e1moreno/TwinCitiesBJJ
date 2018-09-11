import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from 'design/GlobalStyle';

import LayoutContextProvider from '../context/LayoutContextProvider';

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <LayoutContextProvider>{children}</LayoutContextProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

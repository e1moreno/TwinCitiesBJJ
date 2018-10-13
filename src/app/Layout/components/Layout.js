import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import 'typeface-contrail-one';

import GlobalStyle from 'design/GlobalStyle';
import { Helmet } from 'react-helmet';

import LayoutContextProvider from '../context/LayoutContextProvider';

const Layout = ({ children }) => (
  <Fragment>
    <Helmet titleTemplate="%s | Twin Cities BJJ">
      <html lang="en" amp />
    </Helmet>
    <GlobalStyle />
    <LayoutContextProvider>{children}</LayoutContextProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

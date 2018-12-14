import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import 'typeface-roboto-condensed';
import 'typeface-vollkorn';

import { Helmet } from 'react-helmet';
import GlobalStyle from 'design/GlobalStyle';

import { NavBar } from 'app/NavBar';
import LayoutContextProvider from '../context/LayoutContextProvider';

const Layout = ({ children }) => (
  <Fragment>
    <Helmet titleTemplate="%s | Twin Cities BJJ">
      <html lang="en" amp />
    </Helmet>
    <GlobalStyle />
    <LayoutContextProvider>
      <NavBar />
      {children}
    </LayoutContextProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

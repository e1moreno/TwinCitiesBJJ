import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import 'typeface-source-sans-pro';

import { Helmet } from 'react-helmet';
import GlobalStyle from 'design/GlobalStyle';

import { NavBar } from 'app/NavBar';
import {
  ImageGalleryContextProvider,
  ImageGalleryContextWrapper,
} from 'app/ImageGallery';
import LayoutContextProvider from '../context/LayoutContextProvider';

const Layout = ({ children }) => (
  <Fragment>
    <Helmet titleTemplate="%s | Twin Cities BJJ">
      <html lang="en" amp />
    </Helmet>
    <GlobalStyle />
    <LayoutContextProvider>
      <ImageGalleryContextProvider>
        <NavBar />
        <ImageGalleryContextWrapper />
        {children}
      </ImageGalleryContextProvider>
    </LayoutContextProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

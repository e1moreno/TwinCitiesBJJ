import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import 'typeface-source-sans-pro';

import { Helmet } from 'react-helmet';

import { NavBar } from 'app/NavBar';
import { MobileNavContainer } from 'app/MobileNav';
import {
  ImageGalleryContextProvider,
  ImageGalleryContainer,
} from 'app/ImageGallery';
import { Footer } from 'app/Footer';

import GlobalStyleContainer from '../containers/GlobalStyleContainer';
import LayoutContextProvider from '../context/LayoutContextProvider';

const Layout = ({ children }) => (
  <Fragment>
    <Helmet titleTemplate="%s | Twin Cities BJJ">
      <html lang="en" amp />
    </Helmet>
    <LayoutContextProvider>
      <GlobalStyleContainer />
      <ImageGalleryContextProvider>
        <NavBar />
        <MobileNavContainer />
        <ImageGalleryContainer />
        {children}
      </ImageGalleryContextProvider>
    </LayoutContextProvider>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

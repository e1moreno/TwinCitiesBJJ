import React from 'react';
import PropTypes from 'prop-types';

import 'typeface-source-sans-pro';

import { Helmet } from 'react-helmet';

import { NavBar } from 'layout/components/NavBar';
import { MobileNavContainer } from 'layout/components/MobileNav';
import {
  ImageGalleryContextProvider,
  ImageGalleryContainer,
} from 'layout/components/ImageGallery';
import { ModalContextProvider, ModalContainer } from 'layout/components/Modal';
import { Footer } from 'layout/components/Footer';

import { GlobalStyleContainer } from 'layout/components/GlobalStyle';

const Layout = ({ children }) => (
  <>
    <Helmet titleTemplate="%s | Twin Cities BJJ">
      <html lang="en" amp />
    </Helmet>
    <ModalContextProvider>
      <GlobalStyleContainer />
      <ImageGalleryContextProvider>
        <NavBar />
        <MobileNavContainer />
        <ModalContainer />
        <ImageGalleryContainer />
        {children}
      </ImageGalleryContextProvider>
    </ModalContextProvider>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

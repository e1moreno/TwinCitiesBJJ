import React from 'react';
import PropTypes from 'prop-types';

import 'typeface-source-sans-pro';

import { Helmet } from 'react-helmet';

import { NavBar } from 'app/NavBar';
import { MobileNavContainer } from 'app/MobileNav';
import {
  ImageGalleryContextProvider,
  ImageGalleryContainer,
} from 'app/ImageGallery';
import { ModalContextProvider, ModalContainer } from 'app/Modal';
import { Footer } from 'app/Footer';

import GlobalStyleContainer from '../containers/GlobalStyleContainer';

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

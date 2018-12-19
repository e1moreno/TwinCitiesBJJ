import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryContext } from './ImageGalleryContextProvider';

const ImageGalleryContextConsumer = ({ children }) => (
  <ImageGalleryContext.Consumer>{children}</ImageGalleryContext.Consumer>
);

ImageGalleryContextConsumer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ImageGalleryContextConsumer;

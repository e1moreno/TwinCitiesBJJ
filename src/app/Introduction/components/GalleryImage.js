import React from 'react';
import PropTypes from 'prop-types';

import { GalleryImageWrapper, FitImage } from '../styles/GalleryImage.sytes';

const GalleryImage = ({ src, onClick }) => (
  <GalleryImageWrapper onClick={onClick}>
    <FitImage src={src} />
  </GalleryImageWrapper>
);
GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryImage;

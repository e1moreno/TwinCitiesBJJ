import React from 'react';
import PropTypes from 'prop-types';

import { GalleryImageWrapper, FitImage } from '../styles/GalleryImage.sytes';

const GalleryImage = ({ src, onClick, onKeyDown }) => (
  <GalleryImageWrapper onClick={onClick} onKeyDown={onKeyDown} tabIndex={0}>
    <FitImage src={src} />
  </GalleryImageWrapper>
);
GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default GalleryImage;

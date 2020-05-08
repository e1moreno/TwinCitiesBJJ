import React from 'react';
import PropTypes from 'prop-types';

import GalleryImageContainer from '../containers/GalleryImageContainer';
import { GalleryGrid } from '../styles/IntroductionGallery.styles';

const IntroductionGallery = ({ src, handleImageClick }) => (
  <GalleryGrid>
    {src.map(({ src: imageSrc, ind }) => (
      <GalleryImageContainer
        key={ind}
        src={imageSrc}
        ind={ind}
        handleImageClick={handleImageClick}
      />
    ))}
  </GalleryGrid>
);

IntroductionGallery.propTypes = {
  src: PropTypes.arrayOf(
    PropTypes.shape({
      ind: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleImageClick: PropTypes.func.isRequired,
};

export default IntroductionGallery;

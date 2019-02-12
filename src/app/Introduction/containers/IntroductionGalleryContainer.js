import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import floor from 'images/floor.jpg';
import IntroductionGallery from '../components/IntroductionGallery';

const IntroductionGalleryContainer = ({ openGallery }) => {
  const [src] = useState(() => new Array(6).fill({ src: floor }).map((image, ind) => ({
    ...image,
    ind,
  })));

  const handleImageClick = useCallback(
    (ind) => {
      openGallery(ind, src);
    },
    [src],
  );

  return <IntroductionGallery src={src} handleImageClick={handleImageClick} />;
};
IntroductionGalleryContainer.propTypes = {
  openGallery: PropTypes.func.isRequired,
};

export default IntroductionGalleryContainer;

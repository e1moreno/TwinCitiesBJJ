import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import GalleryImage from '../components/GalleryImage';

const GalleryImageContainer = ({ ind, src, handleImageClick }) => {
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      handleImageClick(ind);
    },
    [handleImageClick, ind],
  );

  return <GalleryImage src={src} onClick={handleClick} />;
};
GalleryImageContainer.propTypes = {
  ind: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};

export default GalleryImageContainer;

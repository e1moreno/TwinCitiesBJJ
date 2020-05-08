import React, { useMemo, useCallback, useContext } from 'react';

import { ImageGalleryContext } from 'layout/components/ImageGallery';
import floor from 'images/floor.jpg';
import IntroductionGallery from '../components/IntroductionGallery';

const IntroductionGalleryContainer = () => {
  const { dispatch } = useContext(ImageGalleryContext);

  const src = useMemo(
    () =>
      new Array(6).fill({ src: floor }).map((image, ind) => ({
        ...image,
        ind,
      })),
    [],
  );

  const handleImageClick = useCallback(
    (currentImage) => {
      dispatch({ type: 'openGallery', currentImage, src });
    },
    [dispatch, src],
  );

  return <IntroductionGallery src={src} handleImageClick={handleImageClick} />;
};

export default IntroductionGalleryContainer;

import React, { useContext, useCallback } from 'react';

import Lightbox from 'react-images';
import { ImageGalleryContext } from '../context/ImageGalleryContextProvider';

const ImageGalleryContainer = () => {
  const {
    open, currentImage, src, dispatch,
  } = useContext(ImageGalleryContext);

  const handlePrevious = useCallback(() => {
    if (currentImage > 0) {
      dispatch({ type: 'setCurrentImage', currentImage: currentImage - 1 });
    }
  }, [currentImage]);

  const handleNext = useCallback(() => {
    const nextImage = currentImage + 1;

    if (nextImage < src.length) {
      dispatch({ type: 'setCurrentImage', currentImage: nextImage });
    }
  }, [src, currentImage]);

  const handleClose = useCallback(() => {
    dispatch({ type: 'setOpen', open: false });
  }, []);

  return (
    <Lightbox
      images={src}
      isOpen={open}
      currentImage={currentImage}
      onClickPrev={handlePrevious}
      onClickNext={handleNext}
      onClickImage={handleNext}
      onClose={handleClose}
      showImageCount={false}
      backdropClosesModal
    />
  );
};

export default ImageGalleryContainer;

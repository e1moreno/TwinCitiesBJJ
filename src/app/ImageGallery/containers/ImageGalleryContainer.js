import React, { useContext, useCallback } from 'react';

import Carousel, { Modal, ModalGateway } from 'react-images';
import { ImageGalleryContext } from '../context/ImageGalleryContextProvider';

const ImageGalleryContainer = () => {
  const {
    open, currentImage, src, dispatch,
  } = useContext(ImageGalleryContext);

  const handleClose = useCallback(() => {
    dispatch({ type: 'setOpen', open: false });
  }, [dispatch]);

  return (
    <ModalGateway>
      {open && (
        <Modal onClose={handleClose}>
          <Carousel views={src} currentIndex={currentImage} />
        </Modal>
      )}
    </ModalGateway>
  );
};

export default ImageGalleryContainer;

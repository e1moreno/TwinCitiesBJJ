import React from 'react';

import ImageGalleryContextConsumer from '../context/ImageGalleryContextConsumer';
import ImageGalleryContainer from './ImageGalleryContainer';

const ImageGalleryContextWrapper = () => (
  <ImageGalleryContextConsumer>
    {({
      src, open, currentImage, setOpen, setCurrentImage,
    }) => (
      <ImageGalleryContainer
        src={src}
        open={open}
        currentImage={currentImage}
        setOpen={setOpen}
        setCurrentImage={setCurrentImage}
      />
    )}
  </ImageGalleryContextConsumer>
);

export default ImageGalleryContextWrapper;

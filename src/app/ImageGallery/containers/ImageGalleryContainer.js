import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Lightbox from 'react-images';

class ImageGalleryContainer extends Component {
  static propTypes = {
    src: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
      }),
    ),
    open: PropTypes.bool.isRequired,
    currentImage: PropTypes.number.isRequired,
    setOpen: PropTypes.func.isRequired,
    setCurrentImage: PropTypes.func.isRequired,
  };

  static defaultProps = {
    src: [],
  };

  handlePrevious = () => {
    const { currentImage, setCurrentImage } = this.props;

    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  handleNext = () => {
    const { src, currentImage, setCurrentImage } = this.props;
    const nextImage = currentImage + 1;

    if (nextImage < src.length) {
      setCurrentImage(nextImage);
    }
  };

  handleClose = () => {
    const { setOpen } = this.props;

    setOpen(false);
  };

  render() {
    const { src, open, currentImage } = this.props;

    return (
      <Lightbox
        images={src}
        isOpen={open}
        currentImage={currentImage}
        onClickPrev={this.handlePrevious}
        onClickNext={this.handleNext}
        onClickImage={this.handleNext}
        onClose={this.handleClose}
        showImageCount={false}
        backdropClosesModal
      />
    );
  }
}

export default ImageGalleryContainer;

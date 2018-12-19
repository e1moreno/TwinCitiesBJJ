import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryContext = React.createContext();

class ImageGalleryContextProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    src: [],
    open: false,
    currentImage: 0,
  };

  setSource = (newSrc, currentImage = 0) => {
    const { src } = this.state;

    if (src !== newSrc) {
      this.setState({
        src: newSrc,
        currentImage,
      });
    }
  };

  setOpen = (open) => {
    this.setState({
      open,
    });
  };

  setCurrentImage = (currentImage) => {
    this.setState({
      currentImage,
    });
  };

  openGallery = (currentImage, newSrc) => {
    this.setState(({ src }) => ({
      open: true,
      ...(!!currentImage && { currentImage }),
      ...(!!newSrc && newSrc !== src && { src: newSrc }),
    }));
  };

  render() {
    const { children } = this.props;

    return (
      <ImageGalleryContext.Provider
        value={{
          ...this.state,
          setSource: this.setSource,
          setOpen: this.setOpen,
          setCurrentImage: this.setCurrentImage,
          openGallery: this.openGallery,
        }}
      >
        {children}
      </ImageGalleryContext.Provider>
    );
  }
}

export default ImageGalleryContextProvider;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import floor from 'images/floor.jpg';
import IntroductionGallery from '../components/IntroductionGallery';

class IntroductionGalleryContainer extends Component {
  static propTypes = {
    openGallery: PropTypes.func.isRequired,
  };

  state = {
    src: new Array(6).fill({ src: floor }).map((image, ind) => ({
      ...image,
      ind,
    })),
  };

  handleImageClick = (ind) => {
    const { openGallery } = this.props;
    const { src } = this.state;

    openGallery(ind, src);
  };

  render() {
    const { src } = this.state;

    return (
      <IntroductionGallery src={src} handleImageClick={this.handleImageClick} />
    );
  }
}

export default IntroductionGalleryContainer;

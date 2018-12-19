import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GalleryImage from '../components/GalleryImage';

class GalleryImageContainer extends Component {
  static propTypes = {
    ind: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    handleImageClick: PropTypes.func.isRequired,
  };

  handleClick = (e) => {
    const { ind, handleImageClick } = this.props;

    e.preventDefault();
    e.stopPropagation();

    handleImageClick(ind);
  };

  render() {
    const { src } = this.props;

    return <GalleryImage src={src} onClick={this.handleClick} />;
  }
}

export default GalleryImageContainer;

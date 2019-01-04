import React from 'react';
import PropTypes from 'prop-types';

import {
  BannerImageWrapper,
  BannerImage,
  BannerGrid,
  BannerWrapper,
} from '../styles/Banner.styles';

const Banner = ({ image: { source, alt }, children }) => (
  <BannerWrapper role="banner">
    <BannerImageWrapper>
      <BannerImage src={source} alt={alt} />
      <BannerGrid />
    </BannerImageWrapper>
    {children}
  </BannerWrapper>
);
Banner.propTypes = {
  image: PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};
Banner.defaultProps = {
  children: null,
};

export default Banner;

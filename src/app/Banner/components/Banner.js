import React from 'react';
import PropTypes from 'prop-types';

import {
  BannerImageWrapper,
  BannerImage,
  BannerGrid,
  BannerWrapper,
  PageTitleWrapper,
  PageTitle,
} from '../styles/Banner.styles';

const Banner = ({ image: { source, alt }, pageTitle, children }) => (
  <BannerWrapper role="banner">
    <BannerImageWrapper>
      <BannerImage src={source} alt={alt} />
      <BannerGrid>
        {pageTitle && (
          <PageTitleWrapper>
            <PageTitle>{pageTitle}</PageTitle>
          </PageTitleWrapper>
        )}
      </BannerGrid>
    </BannerImageWrapper>
    {children}
  </BannerWrapper>
);
Banner.propTypes = {
  image: PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  pageTitle: PropTypes.string,
  children: PropTypes.node,
};
Banner.defaultProps = {
  pageTitle: null,
  children: null,
};

export default Banner;

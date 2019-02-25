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

const Banner = ({
  full,
  image: { source, alt },
  pageTitle,
  children,
  className,
}) => (
  <BannerWrapper role="banner" className={className}>
    <BannerImageWrapper>
      <BannerImage src={source} alt={alt} full={full} />
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
  full: PropTypes.bool,
  image: PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  pageTitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
Banner.defaultProps = {
  full: false,
  pageTitle: null,
  children: null,
  className: null,
};

export default Banner;

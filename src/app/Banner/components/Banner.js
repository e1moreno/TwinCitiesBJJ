import React from 'react';
import PropTypes from 'prop-types';

import {
  BannerImageWrapper,
  BannerImage,
  BannerGrid,
  BannerWrapper,
  HeaderLogoWrapper,
  HeaderLink,
  Logo,
  PageTitleWrapper,
  PageTitle,
} from '../styles/Banner.styles';

const HeaderLogo = () => (
  <HeaderLogoWrapper>
    <HeaderLink to="/" aria-label="Home">
      <Logo />
    </HeaderLink>
  </HeaderLogoWrapper>
);

const Banner = ({
  full,
  image: { source, alt },
  pageTitle,
  children,
  className,
}) => (
  <BannerWrapper className={className}>
    <BannerImageWrapper>
      <BannerImage src={source} alt={alt} full={full} />
      <BannerGrid>
        <HeaderLogo />
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

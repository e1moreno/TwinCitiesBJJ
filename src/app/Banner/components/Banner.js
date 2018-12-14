import React from 'react';

import billImage from 'images/bill.jpg';

import Contact from './Contact';
import {
  BannerContainer,
  BannerImage,
  BannerGrid,
} from '../styles/Banner.styles';

const Banner = () => (
  <BannerContainer role="banner">
    <BannerImage src={billImage} alt="Students practicing Knee on Belly" />
    <BannerGrid>
      <Contact />
    </BannerGrid>
  </BannerContainer>
);

export default Banner;

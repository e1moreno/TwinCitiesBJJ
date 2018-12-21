import React from 'react';

import billImage from 'images/bill.jpg';

import InviteButton from './InviteButton';
import {
  BannerImageWrapper,
  BannerImage,
  BannerGrid,
  BannerWrapper,
} from '../styles/Banner.styles';

const Banner = () => (
  <BannerWrapper role="banner">
    <BannerImageWrapper>
      <BannerImage src={billImage} alt="Students practicing Knee on Belly" />
      <BannerGrid />
    </BannerImageWrapper>
    <InviteButton />
  </BannerWrapper>
);

export default Banner;

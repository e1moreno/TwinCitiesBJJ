import React from 'react';
import billImage from 'images/bill.jpg';
import { BannerImage } from '../styles/Banner.styles';

const Banner = () => (
  <div role="banner">
    <BannerImage src={billImage} alt="Students practicing Knee on Belly" />
  </div>
);

export default Banner;

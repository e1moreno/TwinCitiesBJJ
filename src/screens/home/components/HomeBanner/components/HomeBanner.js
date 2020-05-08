import React from 'react';

import billImage from 'images/bill.jpg';

import { InviteButtonContainer } from 'screens/home/components/InviteButton';
import { Banner } from '../styles/HomeBanner.styles';

const HomeBanner = () => (
  <Banner
    full
    image={{ source: billImage, alt: 'Students practicing Knee on Belly' }}
  >
    <InviteButtonContainer />
  </Banner>
);

export default HomeBanner;

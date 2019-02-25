import React from 'react';

import billImage from 'images/bill.jpg';

import { Banner } from '../styles/HomeBanner.styles';

import InviteButtonContainer from '../containers/InviteButtonContainer';

const HomeBanner = () => (
  <Banner
    full
    image={{ source: billImage, alt: 'Students practicing Knee on Belly' }}
  >
    <InviteButtonContainer />
  </Banner>
);

export default HomeBanner;

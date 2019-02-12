import React from 'react';

import billImage from 'images/bill.jpg';

import { Banner } from 'app/Banner';

import InviteButtonContainer from '../containers/InviteButtonContainer';

const HomeBanner = () => (
  <Banner
    image={{ source: billImage, alt: 'Students practicing Knee on Belly' }}
  >
    <InviteButtonContainer />
  </Banner>
);

export default HomeBanner;

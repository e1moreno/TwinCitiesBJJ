import React from 'react';

import billImage from 'images/bill.jpg';

import { Banner } from 'app/Banner';
import HomeContextConsumer from 'app/Home/context/HomeContextConsumer';

import InviteButtonContainer from '../containers/InviteButtonContainer';

const HomeBanner = () => (
  <Banner
    image={{ source: billImage, alt: 'Students practicing Knee on Belly' }}
  >
    <HomeContextConsumer>
      {({ joinRef }) => <InviteButtonContainer joinRef={joinRef} />}
    </HomeContextConsumer>
  </Banner>
);

export default HomeBanner;

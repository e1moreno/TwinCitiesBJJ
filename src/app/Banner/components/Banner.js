import React from 'react';

import billImage from 'images/bill.jpg';

import HomeContextConsumer from 'app/Home/context/HomeContextConsumer';

import InviteButtonContainer from '../containers/InviteButtonContainer';
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
    <HomeContextConsumer>
      {({ joinRef }) => <InviteButtonContainer joinRef={joinRef} />}
    </HomeContextConsumer>
  </BannerWrapper>
);

export default Banner;

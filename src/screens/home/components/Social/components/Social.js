import React from 'react';
import { FacebookF, Instagram } from 'styled-icons/fa-brands';
import SocialLinkContainer from '../containers/SocialLinkContainer';

import {
  PageSection,
  SocialWrapper,
  SocialHeader,
} from '../styles/Social.styles';

const Social = () => (
  <PageSection>
    <SocialHeader>Find Us On</SocialHeader>
    <SocialWrapper>
      <SocialLinkContainer name="facebook" Icon={FacebookF} variant="round" />
      <SocialLinkContainer name="instagram" Icon={Instagram} variant="round" />
    </SocialWrapper>
  </PageSection>
);

export default Social;

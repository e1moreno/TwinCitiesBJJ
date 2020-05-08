import React from 'react';
import { FacebookF, Instagram } from 'styled-icons/fa-brands';

import {
  PageSection,
  SocialWrapper,
  SocialHeader,
  FbIcon,
  InstaIcon,
} from '../styles/Social.styles';

const Social = () => (
  <PageSection>
    <SocialHeader>Find Us On</SocialHeader>
    <SocialWrapper>
      <FbIcon Symbol={FacebookF} variant="round" title="facebook" />
      <InstaIcon Symbol={Instagram} variant="round" title="instagram" />
    </SocialWrapper>
  </PageSection>
);

export default Social;

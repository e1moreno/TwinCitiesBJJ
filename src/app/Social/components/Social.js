import React from 'react';

import {
  SocialWrapper,
  SocialLink,
  FacebookIcon,
  InstagramIcon,
} from '../styles/Social.styles';

const Social = () => (
  <SocialWrapper>
    <SocialLink>
      <FacebookIcon size="1.8em" />
    </SocialLink>
    <SocialLink>
      <InstagramIcon size="2em" />
    </SocialLink>
  </SocialWrapper>
);

export default Social;

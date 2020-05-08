import React from 'react';
import PropTypes from 'prop-types';

import {
  SocialWrapper,
  SocialLink,
  FacebookIcon,
  InstagramIcon,
} from '../styles/SocialIcons.styles';

const SocialIcons = ({ fbIconSize, instaIconSize }) => (
  <SocialWrapper>
    <SocialLink>
      <FacebookIcon size={fbIconSize} />
    </SocialLink>
    <SocialLink>
      <InstagramIcon size={instaIconSize} />
    </SocialLink>
  </SocialWrapper>
);
SocialIcons.propTypes = {
  fbIconSize: PropTypes.string,
  instaIconSize: PropTypes.string,
};
SocialIcons.defaultProps = {
  fbIconSize: '1.6em',
  instaIconSize: '2em',
};

export default SocialIcons;

import React from 'react';
import PropTypes from 'prop-types';

import FacebookLinkContainer from '../containers/FacebookLinkContainer';
import InstagramLinkContainer from '../containers/InstagramLinkContainer';
import { SocialWrapper } from '../styles/SocialIcons.styles';

const SocialIcons = ({ fbIconSize, instaIconSize }) => (
  <SocialWrapper>
    <FacebookLinkContainer size={fbIconSize} />
    <InstagramLinkContainer size={instaIconSize} />
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

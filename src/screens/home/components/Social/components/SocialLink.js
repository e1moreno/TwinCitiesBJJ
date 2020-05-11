import React from 'react';
import PropTypes from 'prop-types';

import { Icon as StyledIcon } from '../styles/SocialLink.styles';

const SocialLink = ({ href, Icon, title }) => (
  <StyledIcon href={href} Symbol={Icon} variant="round" title={title} />
);
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default SocialLink;

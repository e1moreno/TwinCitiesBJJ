import React from 'react';
import PropTypes from 'prop-types';

import { Link, Icon } from '../styles/InstagramLink.styles';

const InstagramLink = ({ href, size }) => (
  <Link href={href}>
    <Icon size={size} />
  </Link>
);

InstagramLink.propTypes = {
  href: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default InstagramLink;

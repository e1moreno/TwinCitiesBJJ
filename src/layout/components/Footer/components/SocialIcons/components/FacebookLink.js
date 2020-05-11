import React from 'react';
import PropTypes from 'prop-types';

import { Link, Icon } from '../styles/FacebookLink.styles';

const FacebookLink = ({ href, size }) => (
  <Link href={href}>
    <Icon size={size} />
  </Link>
);

FacebookLink.propTypes = {
  href: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default FacebookLink;

import React from 'react';
import PropTypes from 'prop-types';

import { useSocialEntry } from 'layout/components/Social';
import FacebookLink from '../components/FacebookLink';

const FacebookLinkContainer = ({ size }) => {
  const { url } = useSocialEntry('facebook');

  return <FacebookLink href={url} size={size} />;
};

FacebookLinkContainer.propTypes = {
  size: PropTypes.string.isRequired,
};

export default FacebookLinkContainer;

import React from 'react';
import PropTypes from 'prop-types';

import { useSocialEntry } from 'layout/components/Social';
import InstagramLink from '../components/InstagramLink';

const InstagramLinkContainer = ({ size }) => {
  const { url } = useSocialEntry('instagram');

  return <InstagramLink href={url} size={size} />;
};

InstagramLinkContainer.propTypes = {
  size: PropTypes.string.isRequired,
};

export default InstagramLinkContainer;

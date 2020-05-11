import React from 'react';
import PropTypes from 'prop-types';

import { useSocialEntry } from 'layout/components/Social';
import SocialLink from '../components/SocialLink';

const SocialLinkContainer = ({ name, Icon }) => {
  const { url } = useSocialEntry(name);

  return <SocialLink href={url} Icon={Icon} title={name} />;
};
SocialLinkContainer.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};

export default SocialLinkContainer;

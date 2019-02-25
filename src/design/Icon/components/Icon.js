import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  RoundIconWrapper,
  RegularIconWrapper,
} from '../styles/Icon.styles';

const RegularIcon = ({ Symbol, color, ...rest }) => (
  <RegularIconWrapper color={color} {...rest}>
    <Symbol className="symbol-icon" />
  </RegularIconWrapper>
);
RegularIcon.propTypes = {
  Symbol: PropTypes.object.isRequired,
  color: PropTypes.string,
};
RegularIcon.defaultProps = {
  color: 'inherit',
};

const RoundIcon = ({ Symbol, color, ...rest }) => (
  <RoundIconWrapper color={color} {...rest}>
    <Symbol className="symbol-icon" />
  </RoundIconWrapper>
);
RoundIcon.propTypes = {
  Symbol: PropTypes.object.isRequired,
  color: PropTypes.string,
};
RoundIcon.defaultProps = {
  color: 'inherit',
};

const Icon = ({
  variant, href, onClick, title, ...rest
}) => {
  let IconComponent;
  switch (variant.toLowerCase()) {
    case 'round':
      IconComponent = RoundIcon;
      break;
    default:
      IconComponent = RegularIcon;
      break;
  }

  return (
    <Button href={href} title={title}>
      <IconComponent {...rest} />
    </Button>
  );
};

Icon.propTypes = {
  href: PropTypes.string,
  IconStyles: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};
Icon.defaultProps = {
  href: undefined,
  onClick: undefined,
  IconStyles: {},
  variant: 'icon',
  title: undefined,
};

export default Icon;

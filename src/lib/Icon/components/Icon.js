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
  variant,
  href,
  onClick,
  title,
  className,
  renderElement,
  ...rest
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
    <Button
      as={renderElement}
      href={href}
      title={title}
      className={className}
      onClick={onClick}
      aria-label={title}
    >
      <IconComponent {...rest} />
    </Button>
  );
};

Icon.propTypes = {
  Symbol: PropTypes.object.isRequired,
  renderElement: PropTypes.string,
  href: PropTypes.string,
  IconStyles: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string,
};
Icon.defaultProps = {
  renderElement: undefined,
  href: undefined,
  onClick: undefined,
  IconStyles: {},
  variant: 'icon',
  title: undefined,
  className: undefined,
};

export default Icon;

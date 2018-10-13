import React from 'react';
import PropTypes from 'prop-types';

import { WindowSize } from 'design/WindowSize';
import { RoundIconWrapper, RegularIconWrapper } from '../styles/Icon.styles';

const baseStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const RegularIcon = ({
  Symbol, color, width, ...rest
}) => (
  <RegularIconWrapper color={color} {...rest}>
    <Symbol size={width < 600 ? '3em' : '2em'} style={{ ...baseStyle }} />
  </RegularIconWrapper>
);
RegularIcon.propTypes = {
  Symbol: PropTypes.object.isRequired,
  color: PropTypes.string,
  width: PropTypes.number.isRequired,
};
RegularIcon.defaultProps = {
  color: 'inherit',
};

const RoundIcon = ({ Symbol, color, ...rest }) => (
  <RoundIconWrapper color={color} {...rest}>
    <Symbol size="1.5em" style={{ ...baseStyle }} />
  </RoundIconWrapper>
);
RoundIcon.propTypes = {
  Symbol: PropTypes.object.isRequired,
  color: PropTypes.string,
};
RoundIcon.defaultProps = {
  color: 'inherit',
};

const Icon = ({ variant, ...rest }) => {
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
    <WindowSize>
      {({ width }) => <IconComponent {...rest} width={width} />}
    </WindowSize>
  );
};

Icon.propTypes = {
  variant: PropTypes.string,
};
Icon.defaultProps = {
  variant: 'icon',
};

export default Icon;

import React from 'react';
import PropTypes from 'prop-types';

import { SMALL_VIEW } from 'utils/constants';
import { WindowSize } from 'design/WindowSize';
import { RoundIconWrapper, RegularIconWrapper } from '../styles/Icon.styles';

const baseStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const RegularIcon = ({
  Symbol, color, windowWidth, IconStyles, ...rest
}) => (
  <RegularIconWrapper color={color} {...rest} tabIndex="0">
    <Symbol
      size={windowWidth < SMALL_VIEW ? '3em' : '2em'}
      style={{ ...baseStyle, ...IconStyles }}
    />
  </RegularIconWrapper>
);
RegularIcon.propTypes = {
  IconStyles: PropTypes.object,
  Symbol: PropTypes.object.isRequired,
  color: PropTypes.string,
  windowWidth: PropTypes.number.isRequired,
};
RegularIcon.defaultProps = {
  IconStyles: {},
  color: 'inherit',
};

const RoundIcon = ({ Symbol, color, ...rest }) => (
  <RoundIconWrapper color={color} {...rest} tabIndex="0">
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
      {({ windowWidth }) => (
        <IconComponent {...rest} windowWidth={windowWidth} />
      )}
    </WindowSize>
  );
};

Icon.propTypes = {
  IconStyles: PropTypes.object,
  variant: PropTypes.string,
};
Icon.defaultProps = {
  IconStyles: {},
  variant: 'icon',
};

export default Icon;

import React from 'react';
import PropTypes from 'prop-types';

import useFocus from './useFocus';
import PhoneInput from '../components/PhoneInput';

const PhoneInputContainer = ({
  labelText,
  labelProps,
  id,
  name,
  value,
  onChange,
  ...other
}) => {
  const { focus, handleBlur, handleFocus } = useFocus(false);
  return (
    <PhoneInput
      focus={focus}
      labelText={labelText}
      labelProps={labelProps}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...other}
    />
  );
};

PhoneInputContainer.propTypes = {
  labelText: PropTypes.string,
  labelProps: PropTypes.object,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

PhoneInputContainer.defaultProps = {
  labelText: null,
  labelProps: {},
};

export default PhoneInputContainer;

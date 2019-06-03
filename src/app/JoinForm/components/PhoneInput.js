import React from 'react';
import PropTypes from 'prop-types';

import { PHONE_MASK } from 'utils/constants';
import { InputWrapper, Label, Input } from '../styles/PhoneInput.styles';

const PhoneInput = ({
  focus,
  labelText,
  labelProps,
  id,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  ...other
}) => (
  <InputWrapper>
    <Label htmlFor={id} {...labelProps} focus={focus}>
      {!!labelText && labelText}
      <Input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        mask={PHONE_MASK}
        guide={false}
        {...other}
      />
    </Label>
  </InputWrapper>
);

PhoneInput.propTypes = {
  focus: PropTypes.bool,
  labelText: PropTypes.string,
  labelProps: PropTypes.object,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
};
PhoneInput.defaultProps = {
  focus: false,
  labelText: null,
  labelProps: {},
};

export default PhoneInput;

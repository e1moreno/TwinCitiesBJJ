import React from 'react';
import PropTypes from 'prop-types';

import { InputWrapper, Label, Input } from '../styles/FormInput.styles';

const FormInput = ({
  focus,
  labelText,
  labelProps,
  type,
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
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...other}
      />
    </Label>
  </InputWrapper>
);

FormInput.propTypes = {
  focus: PropTypes.bool,
  labelText: PropTypes.string,
  labelProps: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
};
FormInput.defaultProps = {
  focus: false,
  type: 'text',
  labelText: null,
  labelProps: {},
};

export default FormInput;

import React from 'react';
import PropTypes from 'prop-types';

import { InputWrapper, Label, TextArea } from '../styles/FormTextArea.styles';

const FormTextArea = ({
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
      <TextArea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={3}
        {...other}
      />
    </Label>
  </InputWrapper>
);

FormTextArea.propTypes = {
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
FormTextArea.defaultProps = {
  focus: false,
  labelText: null,
  labelProps: {},
};

export default FormTextArea;

import React from 'react';
import PropTypes from 'prop-types';

import useFocus from './useFocus';
import FormInput from '../components/FormInput';

const FormInputContainer = ({
  labelText,
  labelProps,
  type,
  id,
  name,
  value,
  onChange,
  ...other
}) => {
  const { focus, handleBlur, handleFocus } = useFocus(false);
  return (
    <FormInput
      focus={focus}
      labelText={labelText}
      labelProps={labelProps}
      type={type}
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

FormInputContainer.propTypes = {
  labelText: PropTypes.string,
  labelProps: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormInputContainer.defaultProps = {
  labelText: null,
  labelProps: {},
  type: 'text',
};

export default FormInputContainer;

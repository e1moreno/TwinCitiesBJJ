import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormInput from '../components/FormInput';

class FormInputContainer extends Component {
  static propTypes = {
    labelText: PropTypes.string,
    labelProps: PropTypes.object,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    labelText: null,
    labelProps: {},
    type: 'text',
  };

  state = {
    focus: false,
  };

  handleFocus = () => {
    this.setState({
      focus: true,
    });
  };

  handleBlur = () => {
    this.setState({
      focus: false,
    });
  };

  render() {
    const {
      labelText,
      labelProps,
      type,
      id,
      name,
      value,
      onChange,
      ...other
    } = this.props;
    const { focus } = this.state;

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
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...other}
      />
    );
  }
}

export default FormInputContainer;

import React from 'react';
import PropTypes from 'prop-types';

import FormInputContainer from '../containers/FormInputContainer';
import PhoneInputContainer from '../containers/PhoneInputContainer';
import FormTextAreaContainer from '../containers/FormTextAreaContainer';
import {
  Form,
  SubmitButtonWrapper,
  SubmitButton,
} from '../styles/JoinForm.styles';

const JoinForm = ({
  formName,
  firstName,
  lastName,
  email,
  phone,
  additional,
  onChange,
}) => (
  <Form
    name={formName}
    method="POST"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value={formName} />
    <input
      type="hidden"
      name="subject"
      value={`${firstName} ${lastName} wants to join Twin Cities BJJ`}
    />
    <FormInputContainer
      id="joinFirstName"
      labelText="First Name"
      name="firstName"
      placeholder="Your First Name"
      value={firstName}
      onChange={onChange}
      aria-label="First Name Input"
      required
    />
    <FormInputContainer
      id="joinLastName"
      labelText="Last Name"
      name="lastName"
      placeholder="Your Last Name"
      value={lastName}
      onChange={onChange}
      aria-label="Last Name Input"
      required
    />
    <FormInputContainer
      id="joinEmail"
      type="email"
      labelText="Email"
      name="email"
      placeholder="Your Email"
      value={email}
      onChange={onChange}
      aria-label="Email Input"
      required
    />
    <PhoneInputContainer
      id="joinPhone"
      type="tel"
      labelText="Phone"
      name="phone"
      placeholder="Your Phone Number"
      value={phone}
      onChange={onChange}
      aria-label="Phone Number Input"
      minLength={14}
      required
    />
    <FormTextAreaContainer
      id="joinAdditional"
      labelText="Anything Else?"
      name="additional"
      placeholder="Tell us more about you."
      value={additional}
      onChange={onChange}
      aria-label="Additional Information"
    />
    <SubmitButtonWrapper>
      <SubmitButton type="submit" id="joinSubmit" aria-label="Submit Join Form">
        Submit
      </SubmitButton>
    </SubmitButtonWrapper>
  </Form>
);

JoinForm.propTypes = {
  formName: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  additional: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
JoinForm.defaultProps = {
  formName: 'joinForm',
};

export default JoinForm;

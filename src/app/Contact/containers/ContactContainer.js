import React from 'react';
import PropTypes from 'prop-types';

import Contact from '../components/Contact';

const ContactContainer = ({
  coordinates,
  phoneNumber,
  streetAddress,
  address2,
  city,
  state,
  zipCode,
  navigationUrl,
}) => (
  <Contact
    coordinates={coordinates}
    phoneNumber={phoneNumber}
    streetAddress={streetAddress}
    address2={address2}
    city={city}
    state={state}
    zipCode={zipCode}
    navigationUrl={navigationUrl}
  />
);

ContactContainer.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  phoneNumber: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  address2: PropTypes.string,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  navigationUrl: PropTypes.string.isRequired,
};
ContactContainer.defaultProps = {
  address2: null,
};

export default ContactContainer;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { useWindowSize } from 'design/WindowSize';
import Contact from '../components/Contact';

const Header = React.memo(() => (
  <Helmet>
    <title>Contact</title>
  </Helmet>
));

const ContactContainer = ({
  coordinates,
  phoneNumber,
  streetAddress,
  address2,
  city,
  state,
  zipCode,
  navigationUrl,
}) => {
  const { mobile } = useWindowSize();

  return (
    <Fragment>
      <Header />
      <Contact
        coordinates={coordinates}
        phoneNumber={phoneNumber}
        streetAddress={streetAddress}
        address2={address2}
        city={city}
        state={state}
        zipCode={zipCode}
        mobile={mobile}
        navigationUrl={navigationUrl}
      />
    </Fragment>
  );
};

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

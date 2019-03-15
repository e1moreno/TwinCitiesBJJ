import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { ContactContainer } from 'app/Contact';

const ContactPage = ({ data: { contentfulContact } }) => (
  <ContactContainer {...contentfulContact} />
);

ContactPage.propTypes = {
  data: PropTypes.shape({
    contentfulContact: PropTypes.object.isRequired,
  }).isRequired,
};

export const query = graphql`
  query contact {
    contentfulContact {
      coordinates {
        lat
        lng: lon
      }
      phoneNumber
      streetAddress
      address2
      city
      state
      zipCode
      navigationUrl
    }
  }
`;

export default ContactPage;
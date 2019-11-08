import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Helmet from 'react-helmet';

import { ContactContainer } from 'app/Contact';

const Header = React.memo(() => (
  <Helmet>
    <title>Contact</title>
  </Helmet>
));

const ContactPage = ({ data: { contentfulContact } }) => (
  <>
    <Header />
    <ContactContainer {...contentfulContact} />
  </>
);

ContactPage.propTypes = {
  data: PropTypes.shape({
    contentfulContact: PropTypes.object.isRequired,
  }).isRequired,
};

export const query = graphql`
  query contact($environment: String!) {
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
    # dropdown info
    allContentfulClass {
      edges {
        node {
          id
          shortTitle
          slug
          display
        }
      }
    }
    contentfulFeatureToggle(environment: { eq: $environment }) {
      ...FeatureToggleFragment
    }
  }
`;

export default ContactPage;

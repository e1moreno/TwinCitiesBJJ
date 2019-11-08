import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Helmet } from 'react-helmet';

import { Success } from 'app/Success';

const Header = React.memo(() => (
  <Helmet>
    <title>Success</title>
  </Helmet>
));

const SuccessPage = ({
  data: {
    contentfulSuccess: { header, subheader, redirect },
  },
}) => (
  <>
    <Header />
    <Success header={header} subheader={subheader} redirect={redirect} />
  </>
);
SuccessPage.propTypes = {
  data: PropTypes.shape({
    contentfulSuccess: PropTypes.shape({
      header: PropTypes.string.isRequired,
      subheader: PropTypes.string.isRequired,
      redirect: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SuccessPage;

export const query = graphql`
  query successQuery($environment: String!) {
    contentfulSuccess {
      id
      header
      subheader
      redirect
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

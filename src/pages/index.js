import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Helmet } from 'react-helmet';

import HomeContainer from 'screens/home';

const Header = React.memo(() => (
  <Helmet>
    <title>Home</title>
  </Helmet>
));

const IndexPage = ({
  data: { contentfulHomeContent, allContentfulSocial },
}) => (
  <>
    <Header />
    <HomeContainer
      content={contentfulHomeContent}
      social={allContentfulSocial}
    />
  </>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulHomeContent: PropTypes.object.isRequired,
    allContentfulSocial: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query homeQuery($environment: String!) {
    contentfulHomeContent {
      introductionHeader
      content {
        json
      }
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
    # Social
    allContentfulSocial {
      edges {
        node {
          name
          url
        }
      }
    }
  }
`;

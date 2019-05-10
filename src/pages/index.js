import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { HomeContainer } from 'app/Home';

const IndexPage = ({ data: { contentfulHomeContent } }) => (
  <HomeContainer content={contentfulHomeContent} />
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulHomeContent: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query homeQuery {
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
  }
`;

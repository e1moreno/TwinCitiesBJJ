import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Home } from 'app/Home';

const IndexPage = ({ data: { contentfulHomeContent } }) => (
  <Home content={contentfulHomeContent} />
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulHomeContent: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  {
    contentfulHomeContent {
      introductionHeader
    }
  }
`;

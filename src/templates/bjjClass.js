import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { BjjClassContainer } from 'app/BjjClass';

const BjjClass = ({ data: { contentfulClass } }) => (
  <BjjClassContainer data={contentfulClass} />
);
BjjClass.propTypes = {
  data: PropTypes.shape({
    contentfulClass: PropTypes.shape({
      title: PropTypes.string.isRequired,
      shortTitle: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      content: PropTypes.shape({
        json: PropTypes.object,
      }),
    }).isRequired,
  }).isRequired,
};

export default BjjClass;

export const query = graphql`
  query BjjClassQuery($slug: String!) {
    contentfulClass(slug: { eq: $slug }) {
      title
      shortTitle
      slug
      duration
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

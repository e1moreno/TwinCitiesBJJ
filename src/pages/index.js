import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Helmet } from 'react-helmet';

import { HomeContainer } from 'app/Home';

const Header = React.memo(() => (
  <Helmet>
    <title>Home</title>
  </Helmet>
));

const IndexPage = ({ data: { contentfulHomeContent } }) => (
  <Fragment>
    <Header />
    <HomeContainer content={contentfulHomeContent} />
  </Fragment>
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

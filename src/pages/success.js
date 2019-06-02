import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { Helmet } from 'react-helmet';

import { Success } from 'app/Success';

const Header = React.memo(() => (
  <Helmet>
    <title>Success</title>
  </Helmet>
));

const SuccessPage = () => (
  <Fragment>
    <Header />
    <Success />
  </Fragment>
);

export default SuccessPage;

export const query = graphql`
  query successQuery {
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

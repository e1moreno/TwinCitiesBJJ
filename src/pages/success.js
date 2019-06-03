import React, { Fragment } from 'react';
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
  <Fragment>
    <Header />
    <Success header={header} subheader={subheader} redirect={redirect} />
  </Fragment>
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
  query successQuery {
    contentfulSuccess {
      id
      header
      subheader
      buttonText
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
  }
`;

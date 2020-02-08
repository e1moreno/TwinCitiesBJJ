import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import LayoutContextProvider from '../context/LayoutContextProvider';
import Layout from '../components/Layout';

const LayoutContainer = ({
  children,
  data: {
    allContentfulClass: { edges = [] } = { edges: [] },
    contentfulFeatureToggle: { features = {} } = {},
  } = {
    allContentfulClass: { edges: [] },
  },
}) => {
  const formattedDropdown =
    useMemo(
      () =>
        edges
          .map(({ node: { shortTitle, slug, display } }) => ({
            text: shortTitle,
            slug,
            display,
          }))
          .filter(({ display }) => display),
      [edges],
    ) || null;

  return (
    <LayoutContextProvider
      courseDropdownData={formattedDropdown}
      featureToggle={features}
    >
      <Layout>{children}</Layout>
    </LayoutContextProvider>
  );
};

LayoutContainer.propTypes = {
  data: PropTypes.shape({
    allContentfulClass: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            shortTitle: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            display: PropTypes.bool.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }),
    contentfulFeatureToggle: PropTypes.shape({
      features: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export const query = graphql`
  fragment FeatureToggleFragment on ContentfulFeatureToggle {
    environment
    features {
      about
      curriculum
      homeGallery
      homeContent
      schedule
    }
  }
`;

export default LayoutContainer;

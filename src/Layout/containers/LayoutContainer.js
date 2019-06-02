import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

const LayoutContainer = ({
  children,
  data: { allContentfulClass: { edges = [] } = { edges: [] } },
}) => {
  const formattedDropdown = useMemo(
    () => edges
      .map(({ node: { shortTitle, slug, display } }) => ({
        text: shortTitle,
        slug,
        display,
      }))
      .filter(({ display }) => display),
    [edges],
  ) || null;

  return <Layout courseDropdownData={formattedDropdown}>{children}</Layout>;
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
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default LayoutContainer;

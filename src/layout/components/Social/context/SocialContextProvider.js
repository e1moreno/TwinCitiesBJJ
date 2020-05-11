import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const SocialContext = createContext();

const SocialContextProvider = ({ social: { edges }, children }) => {
  const formattedSocial = useMemo(
    () =>
      edges.reduce((acc, { node }) => {
        acc[node.name] = node;
        return acc;
      }, {}),
    [edges],
  );

  return (
    <SocialContext.Provider value={formattedSocial}>
      {children}
    </SocialContext.Provider>
  );
};
SocialContextProvider.propTypes = {
  social: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      }),
    ).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default SocialContextProvider;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export const HomeContext = React.createContext();

const HomeContextProvider = ({ state, children }) => {
  const joinRef = useRef(null);

  return (
    <HomeContext.Provider
      value={{
        ...state,
        joinRef,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
HomeContextProvider.propTypes = {
  state: PropTypes.shape({
    introductionHeader: PropTypes.string.isRequired,
    homePageContent: PropTypes.object.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default HomeContextProvider;

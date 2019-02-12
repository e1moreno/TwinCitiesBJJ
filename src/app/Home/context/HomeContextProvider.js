import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export const HomeContext = React.createContext();

const HomeContextProvider = ({ children }) => {
  const joinRef = useRef(null);

  return (
    <HomeContext.Provider
      value={{
        joinRef,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
HomeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeContextProvider;

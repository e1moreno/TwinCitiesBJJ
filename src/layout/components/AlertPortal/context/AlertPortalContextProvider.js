import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const AlertPortalContext = createContext();

const AlertPortalContextProvider = ({ alert, children }) => {
  const formattedAlert = useMemo(
    () => ({
      type: alert?.type,
      data: alert?.text?.json,
    }),
    [alert],
  );

  return (
    <AlertPortalContext.Provider value={formattedAlert}>
      {children}
    </AlertPortalContext.Provider>
  );
};
AlertPortalContextProvider.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.shape({
      json: PropTypes.object,
    }),
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default AlertPortalContextProvider;

import React from 'react';
import PropTypes from 'prop-types';
import { useImmerReducer } from 'use-immer';

export const LayoutContext = React.createContext(null);

const reducer = (draft, action) => {
  switch (action.type) {
    case 'setMobileNavOpen':
      draft.mobileNavOpen = action.open;
      draft.initialized = Object.prototype.hasOwnProperty.call(
        action,
        'initialized',
      )
        ? action.initialized
        : true;
      break;
    case 'openMobileNav':
      draft.mobileNavOpen = true;
      draft.initialized = Object.prototype.hasOwnProperty.call(
        action,
        'initialized',
      )
        ? action.initialized
        : true;
      break;
    case 'closeMobileNav':
      draft.mobileNavOpen = false;
      draft.initialized = Object.prototype.hasOwnProperty.call(
        action,
        'initialized',
      )
        ? action.initialized
        : true;
      break;
    default:
      break;
  }
};

const LayoutContextProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, {
    mobileNavOpen: false,
    initialized: false,
  });

  return (
    <LayoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};
LayoutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContextProvider;

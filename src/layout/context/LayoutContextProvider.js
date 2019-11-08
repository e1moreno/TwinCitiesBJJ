import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useImmerReducer } from 'use-immer';

export const LayoutContext = createContext(null);
export const FeatureToggleContext = createContext(null);

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

const LayoutContextProvider = ({ featureToggle, children, ...other }) => {
  const [state, dispatch] = useImmerReducer(reducer, {
    mobileNavOpen: false,
    initialized: false,
    ...other,
  });

  return (
    <LayoutContext.Provider value={{ ...state, dispatch }}>
      <FeatureToggleContext.Provider value={featureToggle}>
        {children}
      </FeatureToggleContext.Provider>
    </LayoutContext.Provider>
  );
};
LayoutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  featureToggle: PropTypes.object.isRequired,
};

export default LayoutContextProvider;

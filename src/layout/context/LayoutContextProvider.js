import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useImmerReducer } from 'use-immer';

import { SocialContextProvider } from '../components/Social';
import { AlertPortalContextProvider } from '../components/AlertPortal';

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

const LayoutContextProvider = ({
  featureToggle,
  social,
  alert,
  children,
  ...other
}) => {
  const [state, dispatch] = useImmerReducer(reducer, {
    mobileNavOpen: false,
    initialized: false,
    ...other,
  });

  return (
    <LayoutContext.Provider value={{ ...state, dispatch }}>
      <FeatureToggleContext.Provider value={featureToggle}>
        <SocialContextProvider social={social}>
          <AlertPortalContextProvider alert={alert}>
            {children}
          </AlertPortalContextProvider>
        </SocialContextProvider>
      </FeatureToggleContext.Provider>
    </LayoutContext.Provider>
  );
};
LayoutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  featureToggle: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired,
};

export default LayoutContextProvider;

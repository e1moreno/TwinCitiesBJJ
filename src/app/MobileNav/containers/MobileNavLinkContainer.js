import React, { useContext, useCallback } from 'react';

import { LayoutContext } from 'Layout/context/LayoutContextProvider';
import { NavigationLink } from '../styles/MobileNavLink.styles';

const MobileNavLinkContainer = (props) => {
  const { dispatch } = useContext(LayoutContext);

  const handleClick = useCallback(() => {
    dispatch({ type: 'closeMobileNav' });
  }, [dispatch]);

  return <NavigationLink {...props} onClick={handleClick} />;
};

export default MobileNavLinkContainer;

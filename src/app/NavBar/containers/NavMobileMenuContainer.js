import React, { useContext, useCallback } from 'react';

import { LayoutContext } from 'Layout/context/LayoutContextProvider';

import NavMobileMenu from '../components/NavMobileMenu';

const NavMobileMenuContainer = () => {
  const { mobileNavOpen, dispatch } = useContext(LayoutContext);

  const handleClick = useCallback(() => {
    dispatch({ type: !mobileNavOpen ? 'openMobileNav' : 'closeMobileNav' });
  }, [mobileNavOpen, dispatch]);

  return <NavMobileMenu open={mobileNavOpen} onClick={handleClick} />;
};

export default NavMobileMenuContainer;

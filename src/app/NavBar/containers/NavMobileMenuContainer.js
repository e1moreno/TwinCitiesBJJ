import React, { useContext, useCallback } from 'react';

import { LayoutContext } from 'layout/context/LayoutContextProvider';
import { ModalContext } from 'app/Modal/context/ModalContextProvider';

import NavMobileMenu from '../components/NavMobileMenu';

const NavMobileMenuContainer = () => {
  const { mobileNavOpen, dispatch } = useContext(LayoutContext);
  const { open: modalOpen } = useContext(ModalContext);

  const handleClick = useCallback(() => {
    dispatch({ type: !mobileNavOpen ? 'openMobileNav' : 'closeMobileNav' });
  }, [mobileNavOpen, dispatch]);

  return (
    <NavMobileMenu
      display={!modalOpen}
      open={mobileNavOpen}
      onClick={handleClick}
    />
  );
};

export default NavMobileMenuContainer;

import React, { useContext, useCallback } from 'react';

import { LayoutContext } from 'layout/context/LayoutContextProvider';
import { ModalStateContext } from 'layout/components/Modal';

import NavMobileMenu from '../components/NavMobileMenu';

const NavMobileMenuContainer = () => {
  const { mobileNavOpen, dispatch } = useContext(LayoutContext);
  const { ModalComponent } = useContext(ModalStateContext);

  const handleClick = useCallback(() => {
    dispatch({ type: !mobileNavOpen ? 'openMobileNav' : 'closeMobileNav' });
  }, [dispatch, mobileNavOpen]);

  return (
    <NavMobileMenu
      display={!ModalComponent}
      open={mobileNavOpen}
      onClick={handleClick}
    />
  );
};

export default NavMobileMenuContainer;

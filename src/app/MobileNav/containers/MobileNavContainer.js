import React, { useContext, useEffect, useCallback } from 'react';

import { LayoutContext } from 'app/Layout/context/LayoutContextProvider';
import { useWindowSize } from 'design/WindowSize';
import onKeyHelper from 'utils/onKeyHelper';
import { SMALL_VIEW } from 'utils/constants';

import MobileNav from '../components/MobileNav';

const MobileNavContainer = () => {
  const { initialized, mobileNavOpen, dispatch } = useContext(LayoutContext);
  const { width } = useWindowSize();
  const mobile = width <= SMALL_VIEW;

  useEffect(() => {
    if (!mobile) {
      dispatch({ type: 'closeMobileNav', initialized: false });
    }
  }, [mobile]);

  const handleClose = useCallback(() => {
    dispatch({ type: 'closeMobileNav' });
  }, [dispatch]);

  const handleCloseKeyDown = useCallback(
    (e) => {
      onKeyHelper(e, () => dispatch({ type: 'closeMobileNav' }));
    },
    [dispatch],
  );

  return (
    <MobileNav
      initialized={initialized}
      open={mobileNavOpen}
      onClickClose={handleClose}
      onKeyDownClose={handleCloseKeyDown}
    />
  );
};

export default MobileNavContainer;

import React, { useContext, useEffect, useCallback } from 'react';

import { LayoutContext } from 'layout/context/LayoutContextProvider';
import { useWindowSize } from 'lib/WindowSize';
import onKeyHelper from 'utils/onKeyHelper';

import MobileNav from '../components/MobileNav';

const MobileNavContainer = () => {
  const {
    initialized,
    mobileNavOpen,
    courseDropdownData,
    dispatch,
  } = useContext(LayoutContext);
  const { mobile } = useWindowSize();

  useEffect(() => {
    if (!mobile && initialized) {
      dispatch({ type: 'closeMobileNav', initialized: false });
    }
  }, [mobile, initialized, dispatch]);

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
      collapseData={courseDropdownData}
      onClickClose={handleClose}
      onKeyDownClose={handleCloseKeyDown}
    />
  );
};

export default MobileNavContainer;

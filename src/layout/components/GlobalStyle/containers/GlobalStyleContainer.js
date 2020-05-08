import React, { useContext } from 'react';

import { ModalContext } from 'layout/components/Modal';
import { LayoutContext } from 'layout/context/LayoutContextProvider';
import GlobalStyle from '../components/GlobalStyle';

const GlobalStyleContainer = () => {
  const { mobileNavOpen } = useContext(LayoutContext);
  const { open } = useContext(ModalContext);

  return <GlobalStyle open={mobileNavOpen || open} />;
};

export default GlobalStyleContainer;

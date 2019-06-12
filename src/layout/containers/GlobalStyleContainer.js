import React, { useContext } from 'react';

import GlobalStyle from 'design/GlobalStyle';

import { ModalContext } from 'app/Modal/context/ModalContextProvider';
import { LayoutContext } from '../context/LayoutContextProvider';

const GlobalStyleContainer = () => {
  const { mobileNavOpen } = useContext(LayoutContext);
  const { open } = useContext(ModalContext);

  return <GlobalStyle open={mobileNavOpen || open} />;
};

export default GlobalStyleContainer;

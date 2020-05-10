import React, { useContext } from 'react';

import { LayoutContext } from 'layout/context/LayoutContextProvider';
import GlobalStyle from '../components/GlobalStyle';

const GlobalStyleContainer = () => {
  const { mobileNavOpen } = useContext(LayoutContext);

  return <GlobalStyle open={mobileNavOpen} />;
};

export default GlobalStyleContainer;

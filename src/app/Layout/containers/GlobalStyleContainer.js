import React, { useContext } from 'react';

import GlobalStyle from 'design/GlobalStyle';
import { LayoutContext } from '../context/LayoutContextProvider';

const GlobalStyleContainer = () => {
  const { mobileNavOpen } = useContext(LayoutContext);

  return <GlobalStyle open={mobileNavOpen} />;
};

export default GlobalStyleContainer;

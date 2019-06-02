import React, { useContext } from 'react';

import { LayoutContext } from 'layout/context/LayoutContextProvider';
import Navigation from '../components/Navigation';

const NavigationContainer = () => {
  const { courseDropdownData } = useContext(LayoutContext);

  return <Navigation courseDropdownData={courseDropdownData} />;
};

export default NavigationContainer;

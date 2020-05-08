import React, { useContext, useCallback } from 'react';

import { HomeContext } from 'screens/home/context/HomeContextProvider';
import InviteButton from '../components/InviteButton';

const InviteButtonContainer = () => {
  const { joinRef } = useContext(HomeContext);
  const handleClick = useCallback(() => {
    const {
      current: { offsetTop },
    } = joinRef;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }, [joinRef]);

  return <InviteButton onClick={handleClick} />;
};

export default InviteButtonContainer;

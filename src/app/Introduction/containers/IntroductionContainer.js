import React, { useContext } from 'react';

import { HomeContext } from 'app/Home/context/HomeContextProvider';
import Introduction from '../components/Introduction';

const IntroductionContainer = () => {
  const { introductionHeader, homePageContent } = useContext(HomeContext);

  return (
    <Introduction subHeader={introductionHeader} content={homePageContent} />
  );
};

export default IntroductionContainer;

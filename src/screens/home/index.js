import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Social } from './components/Social';
import { IntroductionContainer } from './components/Introduction';
import { Join } from './components/Join';

import { HomeBanner } from './components/HomeBanner';
import HomeContextProvider from './context/HomeContextProvider';

const HomeContainer = ({
  content: {
    introductionHeader,
    content: { json: homePageContent },
  },
}) => {
  const propState = useMemo(
    () => ({
      introductionHeader,
      homePageContent,
    }),
    [introductionHeader, homePageContent],
  );

  return (
    <HomeContextProvider state={propState}>
      <HomeBanner />
      <main>
        <IntroductionContainer />
        <Join />
        <Social />
      </main>
    </HomeContextProvider>
  );
};
HomeContainer.propTypes = {
  content: PropTypes.shape({
    introductionHeader: PropTypes.string.isRequired,
    content: PropTypes.shape({
      json: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default HomeContainer;

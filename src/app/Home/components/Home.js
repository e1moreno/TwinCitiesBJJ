import React from 'react';

import { IntroductionContainer } from 'app/Introduction';
import { Social } from 'app/Social';
import { Join } from 'app/Join';

import HomeBanner from './HomeBanner';
import { MainContent } from '../styles/Home.styles';

const Home = () => (
  <>
    <HomeBanner />
    <MainContent>
      <IntroductionContainer />
      <Join />
      <Social />
    </MainContent>
  </>
);

export default Home;

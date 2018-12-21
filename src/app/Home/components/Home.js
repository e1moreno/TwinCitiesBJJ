import React from 'react';
import { Helmet } from 'react-helmet';

import { Banner } from 'app/Banner';
import { Introduction } from 'app/Introduction';
import { Join } from 'app/Join';

import HomeContextProvider from '../context/HomeContextProvider';
import HomeContextConsumer from '../context/HomeContextConsumer';
import { MainContent } from '../styles/Home.styles';

const Home = () => (
  <HomeContextProvider>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Banner />
    <MainContent>
      <Introduction />
      <HomeContextConsumer>
        {({ joinRef }) => <Join joinRef={joinRef} />}
      </HomeContextConsumer>
    </MainContent>
  </HomeContextProvider>
);

export default Home;

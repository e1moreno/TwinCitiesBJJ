import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { Banner } from 'app/Banner';
import { Introduction } from 'app/Introduction';
import { MainContent } from '../styles/Home.styles';

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Banner />
    <MainContent>
      <Introduction />
    </MainContent>
  </Fragment>
);

export default Home;

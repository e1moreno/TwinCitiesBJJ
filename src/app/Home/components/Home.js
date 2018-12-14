import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { Banner } from 'app/Banner';
import { MainContent } from '../styles/Home.styles';

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Fragment>
      <Banner />
      <MainContent />
    </Fragment>
  </Fragment>
);

export default Home;

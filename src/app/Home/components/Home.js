import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { Banner } from 'app/Banner';
import { AboutSection, MainContent } from '../styles/Home.styles';

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Fragment>
      <Banner />
      <MainContent>
        <AboutSection>
          <h1>Twin Cities Brazilian Jiu Jitsu</h1>
        </AboutSection>
      </MainContent>
    </Fragment>
  </Fragment>
);

export default Home;

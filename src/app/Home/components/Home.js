import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Introduction } from 'app/Introduction';
import { Join } from 'app/Join';

import HomeBanner from './HomeBanner';
import HomeContextProvider from '../context/HomeContextProvider';
import HomeContextConsumer from '../context/HomeContextConsumer';
import { MainContent } from '../styles/Home.styles';

const Home = ({ content: { introductionHeader } }) => (
  <HomeContextProvider>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <HomeBanner />
    <MainContent>
      <Introduction subHeader={introductionHeader} />
      <HomeContextConsumer>
        {({ joinRef }) => <Join joinRef={joinRef} />}
      </HomeContextConsumer>
    </MainContent>
  </HomeContextProvider>
);
Home.propTypes = {
  content: PropTypes.shape({
    introductionHeader: PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;

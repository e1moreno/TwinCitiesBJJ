import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { IntroductionContainer } from 'app/Introduction';
import { Social } from 'app/Social';
import { Join } from 'app/Join';

import HomeBanner from './HomeBanner';
import HomeContextProvider from '../context/HomeContextProvider';
import { MainContent } from '../styles/Home.styles';

const Header = React.memo(() => (
  <Helmet>
    <title>Home</title>
  </Helmet>
));

const Home = ({ content: { introductionHeader } }) => (
  <HomeContextProvider>
    <Header />
    <HomeBanner />
    <MainContent>
      <IntroductionContainer subHeader={introductionHeader} />
      <Join />
      <Social />
    </MainContent>
  </HomeContextProvider>
);
Home.propTypes = {
  content: PropTypes.shape({
    introductionHeader: PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;

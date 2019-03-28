import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import HomeContextProvider from '../context/HomeContextProvider';
import Home from '../components/Home';

const Header = React.memo(() => (
  <Helmet>
    <title>Home</title>
  </Helmet>
));

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
    <Fragment>
      <Header />
      <HomeContextProvider state={propState}>
        <Home />
      </HomeContextProvider>
    </Fragment>
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

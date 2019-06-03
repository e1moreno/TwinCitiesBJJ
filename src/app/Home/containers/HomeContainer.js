import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import HomeContextProvider from '../context/HomeContextProvider';
import Home from '../components/Home';

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
      <Home />
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

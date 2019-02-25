import React from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from 'design/WindowSize';

import Introduction from '../components/Introduction';

const IntroductionContainer = ({ subHeader }) => {
  const { mobile } = useWindowSize();
  return <Introduction mobile={mobile} subHeader={subHeader} />;
};
IntroductionContainer.propTypes = {
  subHeader: PropTypes.string.isRequired,
};

export default IntroductionContainer;

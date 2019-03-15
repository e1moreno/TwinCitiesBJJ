import React from 'react';
import PropTypes from 'prop-types';

import Introduction from '../components/Introduction';

const IntroductionContainer = ({ subHeader }) => <Introduction subHeader={subHeader} />;
IntroductionContainer.propTypes = {
  subHeader: PropTypes.string.isRequired,
};

export default IntroductionContainer;

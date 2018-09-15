import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

const TCBJJHelmet = ({ children }) => (
  <Fragment>
    <Helmet titleTemplate="%s | Twin Cities BJJ">
      <html lang="en" amp />
      {children}
    </Helmet>
  </Fragment>
);
TCBJJHelmet.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TCBJJHelmet;

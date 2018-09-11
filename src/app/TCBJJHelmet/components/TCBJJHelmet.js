import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

const TCBJJHelmet = ({ children }) => (
  <Helmet titleTemplate="%s | Twin Cities BJJ">{children}</Helmet>
);
TCBJJHelmet.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TCBJJHelmet;

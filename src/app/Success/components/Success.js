import React from 'react';
import PropTypes from 'prop-types';

import {
  MainContent,
  PageSection,
  Header,
  Subheader,
} from '../styles/Success.styles';

const Success = ({
  header, subheader, buttonText, redirect,
}) => (
  <MainContent>
    <PageSection>
      <Header>{header}</Header>
      <Subheader>{subheader}</Subheader>
    </PageSection>
  </MainContent>
);

Success.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default Success;

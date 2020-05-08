import React from 'react';
import PropTypes from 'prop-types';

import TCBJJLogo from 'images/TCBJJLogo';
import {
  MainContent,
  PageSection,
  Header,
  Subheader,
  LogoWrapper,
} from '../styles/Success.styles';

const Success = ({ header, subheader, redirect }) => (
  <MainContent>
    <PageSection>
      <Header>{header}</Header>
      <Subheader>{subheader}</Subheader>
      <LogoWrapper to={redirect} aria-label="Navigate Home">
        <TCBJJLogo />
      </LogoWrapper>
    </PageSection>
  </MainContent>
);

Success.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default Success;

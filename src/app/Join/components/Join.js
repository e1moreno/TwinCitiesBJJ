import React from 'react';
import PropTypes from 'prop-types';

import { PageSection } from 'design/PageSection';

import { JoinFormContainer } from 'app/JoinForm';
import { JoinHeader, JoinSubheader } from '../styles/Join.styles';

const Join = ({ joinRef }) => (
  <PageSection backgroundColor="var(--off-white)" sectionRef={joinRef}>
    <JoinHeader>Try a Free Class!</JoinHeader>
    <JoinSubheader>
      We are excited to start your Jiu Jitsu Journey! Fill out the form and
      we’ll be in touch!
    </JoinSubheader>
    <JoinFormContainer />
  </PageSection>
);
Join.propTypes = {
  joinRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Join;

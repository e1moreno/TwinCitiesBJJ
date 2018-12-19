import React from 'react';

import { PageSection } from 'design/PageSection';

import { JoinHeader, JoinSubheader } from '../styles/Join.styles';

const Join = () => (
  <PageSection backgroundColor="var(--white)" color="var(--menuGray)">
    <JoinHeader>Try a Free Class!</JoinHeader>
    <JoinSubheader>
      We are excited to start your Jiu Jitsu Journey! Fill out the form and
      we’ll be in touch!
    </JoinSubheader>
  </PageSection>
);

export default Join;

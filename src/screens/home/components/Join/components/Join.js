import React, { useContext } from 'react';

import { JoinFormContainer } from 'lib/JoinForm';
import { HomeContext } from 'screens/home/context/HomeContextProvider';
import { PageSection, JoinHeader, JoinSubheader } from '../styles/Join.styles';

const Join = () => {
  const { joinRef } = useContext(HomeContext);
  return (
    <PageSection sectionRef={joinRef}>
      <JoinHeader>Try a Free Class!</JoinHeader>
      <JoinSubheader>
        We are excited to start your Jiu Jitsu Journey! Fill out the form and
        we’ll be in touch!
      </JoinSubheader>
      <JoinFormContainer />
    </PageSection>
  );
};

export default Join;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Banner } from 'app/Banner';
import { CalendarContainer } from 'app/Calendar';

import floorImage from 'images/floor.jpg';
import { MainContent, PageSection } from '../styles/Schedule.styles';

const Schedule = ({ schedule }) => (
  <Fragment>
    <Banner
      pageTitle="Schedule"
      image={{
        source: floorImage,
        alt: 'Students Drilling reps on the ground',
      }}
    />
    <MainContent>
      <PageSection>
        <CalendarContainer schedule={schedule} />
      </PageSection>
    </MainContent>
  </Fragment>
);
Schedule.propTypes = {
  schedule: PropTypes.object.isRequired,
};

export default Schedule;

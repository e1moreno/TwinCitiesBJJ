import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Banner } from 'app/Banner';
import { CalendarContainer } from 'app/Calendar';

import floorImage from 'images/floor.jpg';
import { MainContent } from '../styles/Schedule.styles';

const Schedule = ({ schedule }) => (
  <Fragment>
    <Helmet>
      <title>Schedule</title>
    </Helmet>
    <Banner
      pageTitle="Schedule"
      image={{
        source: floorImage,
        alt: 'Students Drilling reps on the ground',
      }}
    />
    <MainContent>
      <CalendarContainer schedule={schedule} />
    </MainContent>
  </Fragment>
);
Schedule.propTypes = {
  schedule: PropTypes.object.isRequired,
};

export default Schedule;

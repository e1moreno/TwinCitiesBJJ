import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Banner } from 'app/Banner';
import { CalendarContainer } from 'app/Calendar';

import floorImage from 'images/floor.jpg';
import { MainContent, PageSection } from '../styles/Schedule.styles';

const Header = React.memo(() => (
  <Helmet>
    <title>Schedule</title>
  </Helmet>
));

const Schedule = ({ schedule }) => (
  <Fragment>
    <Header />
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

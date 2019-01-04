import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { Banner } from 'app/Banner';

import floorImage from 'images/floor.jpg';

const Schedule = () => (
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
  </Fragment>
);

export default Schedule;

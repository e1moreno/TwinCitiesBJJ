import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Helmet } from 'react-helmet';

import { ScheduleContainer } from 'app/Schedule';

const Header = React.memo(() => (
  <Helmet>
    <title>Schedule</title>
  </Helmet>
));

const SchedulePage = ({ data: { allContentfulScheduleDay } }) => (
  <Fragment>
    <Header />
    <ScheduleContainer schedule={allContentfulScheduleDay} />
  </Fragment>
);
SchedulePage.propTypes = {
  data: PropTypes.shape({
    allContentfulScheduleDay: PropTypes.object.isRequired,
  }).isRequired,
};

export default SchedulePage;

export const query = graphql`
  query scheduleDay {
    allContentfulScheduleDay {
      edges {
        node {
          id
          day
          classes {
            id
            title
            classTime
            class {
              title
              shortTitle
              duration
              slug
              content {
                json
              }
            }
          }
        }
      }
    }
    # dropdown info
    allContentfulClass {
      edges {
        node {
          id
          shortTitle
          slug
          display
        }
      }
    }
  }
`;

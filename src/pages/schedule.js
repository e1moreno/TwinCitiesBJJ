import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { ScheduleContainer } from 'app/Schedule';

const SchedulePage = ({ data: { allContentfulScheduleDay } }) => (
  <ScheduleContainer schedule={allContentfulScheduleDay} />
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
              subheading
              duration
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

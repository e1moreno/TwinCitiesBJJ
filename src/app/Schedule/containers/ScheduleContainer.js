import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Schedule from '../components/Schedule';

const formatClasses = classes => classes.reduce(
  (
    acc,
    {
      id, classTime, class: {
        title, shortTitle, subheading, duration,
      },
    },
  ) => {
    acc[id] = {
      title,
      shortTitle,
      subheading,
      duration,
      startTime: classTime,
    };
    return acc;
  },
  {},
);

const ScheduleContainer = ({ schedule: { edges } }) => {
  const formattedSchedule = useMemo(
    () => edges.reduce((acc, { node: { day, classes } }) => {
      acc[day] = {
        day,
        classes: formatClasses(classes),
      };
      return acc;
    }, {}),
    [edges],
  );

  return <Schedule schedule={formattedSchedule} />;
};

ScheduleContainer.propTypes = {
  schedule: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          day: PropTypes.string.isRequired,
          classes: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              classTime: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              class: PropTypes.shape({
                title: PropTypes.string.isRequired,
                shortTitle: PropTypes.string.isRequired,
                subheading: PropTypes.string,
                duration: PropTypes.number.isRequired,
              }).isRequired,
            }).isRequired,
          ).isRequired,
        }).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default ScheduleContainer;

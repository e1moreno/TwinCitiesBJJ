import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { FullCalendarContainer } from 'app/FullCalendar';
import { MobileCalendarContainer } from 'app/MobileCalendar';
import { useWindowSize } from 'design/WindowSize';

dayjs.extend(customParseFormat);

const daysHeader = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getDateFromString = hour => dayjs(hour, 'hh:mmA').valueOf();

const formatSchedule = sch => Object.values(sch).reduce(
  (acc, day) => {
    acc.formatted[day.day] = {
      date: day.day,
      key: daysHeader.indexOf(day.day),
      classes: {},
    };
    acc.formatted[day.day].classes = Object.entries(day.classes).reduce(
      /* eslint-disable no-param-reassign */
      (acc2, [key, bjjCourse]) => {
        const courseTime = getDateFromString(bjjCourse.startTime);
        acc.times[`t_${bjjCourse.startTime}`] = courseTime;
        acc2[key] = { ...bjjCourse, id: key, startDateTime: courseTime };
        return acc2;
      },
      {},
      /* eslint-enable no-param-reassign */
    );
    return acc;
  },
  {
    formatted: {},
    times: {},
  },
);

const CalendarContainer = ({ schedule }) => {
  const [timeSlots, data] = useMemo(() => {
    const { times, formatted } = formatSchedule(schedule);

    const sortedTimes = Object.values(times).sort();
    return [sortedTimes, formatted];
  }, [schedule]);

  const { medium } = useWindowSize();

  return medium ? (
    <MobileCalendarContainer data={data} days={daysHeader} />
  ) : (
    <FullCalendarContainer data={data} days={daysHeader} slots={timeSlots} />
  );
};
CalendarContainer.propTypes = {
  schedule: PropTypes.object.isRequired,
};

export default CalendarContainer;

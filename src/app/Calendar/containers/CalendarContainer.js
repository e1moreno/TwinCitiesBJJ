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

const getDateFromString = (hour) => dayjs(hour, 'hh:mmA').valueOf();

const serializeSchedule = (sch) => Object.values(sch).reduce((acc, day) => {
  acc[day.day] = {
    date: day.day,
    key: daysHeader.indexOf(day.day),
    classes: {},
  };
  acc[day.day].classes = Object.entries(day.classes).reduce(
    /* eslint-disable no-param-reassign */
    (acc2, [key, bjjCourse]) => {
      const courseTime = getDateFromString(bjjCourse.startTime);
      acc2[key] = { ...bjjCourse, id: key, startDateTime: courseTime };
      return acc2;
    },
    {},
    /* eslint-enable no-param-reassign */
  );
  return acc;
}, {});

const formatSchedule = (data, days) => {
  const calendar = new Array(days.length).fill(null).map(() => []);

  let maxSlots = 0;
  Object.values(data).forEach((day) => {
    Object.values(day.classes).forEach((course) => {
      const {
        id, title, subheading, startTime,
      } = course;

      calendar[day.key].push({
        id,
        primary: subheading ? `${title} - ${subheading}` : title,
        secondary: startTime,
        course,
      });
    });
    const dayLength = calendar[day.key].length;
    maxSlots = dayLength > maxSlots ? dayLength : maxSlots;
  });
  return [
    calendar.map((day) => day.concat(new Array(maxSlots - day.length).fill(null))),
    maxSlots,
  ];
};

const CalendarContainer = ({ schedule }) => {
  const { medium } = useWindowSize();

  const [calendar, maxSlots] = useMemo(() => {
    const serializedSchedule = serializeSchedule(schedule);
    return formatSchedule(serializedSchedule, daysHeader);
  }, [schedule]);

  return medium ? (
    <MobileCalendarContainer
      data={calendar}
      days={daysHeader}
      slotCount={maxSlots}
    />
  ) : (
    <FullCalendarContainer
      data={calendar}
      days={daysHeader}
      slotCount={maxSlots}
    />
  );
};
CalendarContainer.propTypes = {
  schedule: PropTypes.object.isRequired,
};

export default CalendarContainer;

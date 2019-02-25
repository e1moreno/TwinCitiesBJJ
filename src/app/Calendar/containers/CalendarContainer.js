import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { useWindowSize } from 'design/WindowSize';

import Calendar from '../components/Calendar';
import FullCalendarContainer from './FullCalendarContainer';
import MobileCalendarContainer from './MobileCalendarContainer';

const daysHeader = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getDateFromString = hour => new Date(moment(hour, 'hh:mmA'));

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
        const courseTime = getDateFromString(bjjCourse.startTime).getTime();
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
  const [timeSlots, calendar, mobileCalendar, mobileSlotCount] = useMemo(() => {
    const { times, formatted } = formatSchedule(schedule);

    const sortedTimes = Object.values(times).sort();
    const cal = new Array(daysHeader.length)
      .fill(null)
      .map(() => new Array(sortedTimes.length).fill(null));
    const mobileCal = new Array(daysHeader.length).fill(null).map(() => []);

    let maxMobileSlotCount = 0;
    Object.values(formatted).forEach((day) => {
      Object.values(day.classes).forEach((bjjClass) => {
        const timeSlot = sortedTimes.indexOf(bjjClass.startDateTime);
        cal[day.key][timeSlot] = bjjClass;
        mobileCal[day.key].push(bjjClass);
      });
      const dayLength = mobileCal[day.key].length;
      maxMobileSlotCount = dayLength > maxMobileSlotCount ? dayLength : maxMobileSlotCount;
    });
    return [sortedTimes, cal, mobileCal, maxMobileSlotCount];
  }, []);

  const { mobile } = useWindowSize();

  return (
    <Calendar mobile={mobile}>
      {mobile ? (
        <MobileCalendarContainer
          calendar={mobile ? mobileCalendar : calendar}
          slotCount={mobileSlotCount}
          days={daysHeader}
          mobile={mobile}
        />
      ) : (
        <FullCalendarContainer
          calendar={mobile ? mobileCalendar : calendar}
          days={daysHeader}
          slots={timeSlots}
        />
      )}
    </Calendar>
  );
};
CalendarContainer.propTypes = {
  schedule: PropTypes.object.isRequired,
};

export default CalendarContainer;

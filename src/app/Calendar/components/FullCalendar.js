import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Day from './Day';
import Slot from './Slot';
import { CalendarGrid } from '../styles/FullCalendar.styles';

const formatTime = (time) => {
  const tDate = moment(new Date(time));
  return tDate.format('hh:mm A');
};

const FullCalendar = React.memo(({ calendar, days, slots }) => (
  <CalendarGrid columns={days.length} rows={slots.length}>
    {slots.map((time, ind) => (
      <Slot
        key={time}
        columnStart={1}
        columnEnd={2}
        rowStart={ind + 2}
        rowEnd={ind + 3}
        value={formatTime(time)}
        header
        blank
      />
    ))}
    {calendar.map((day, ind) => (
      <Day
        key={ind} // eslint-disable-line react/no-array-index-key
        slot={ind + 1}
        data={day}
        headerText={days[ind]}
      />
    ))}
  </CalendarGrid>
));
FullCalendar.propTypes = {
  calendar: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  slots: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default FullCalendar;

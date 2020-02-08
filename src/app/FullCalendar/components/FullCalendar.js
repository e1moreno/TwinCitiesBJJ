import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import FullDay from './FullDay';
import {
  GridWrapper,
  CalendarHeader,
  CalendarInstructions,
  CalendarTitle,
  CalendarGrid,
} from '../styles/FullCalendar.styles';

const Header = () => (
  <CalendarHeader>
    <CalendarInstructions>
      <CalendarTitle>Weekly Schedule</CalendarTitle>
    </CalendarInstructions>
  </CalendarHeader>
);

const FullCalendar = forwardRef(({ calendar, days, slotCount }, ref) => (
  <>
    <GridWrapper>
      <Header />
      <CalendarGrid ref={ref} columns={days.length} rows={slotCount}>
        {calendar.map((day, ind) => (
          // Maps time slots
          <FullDay
            key={ind} // eslint-disable-line react/no-array-index-key
            slot={ind}
            data={day}
            headerText={days[ind]}
            offsetY={2}
          />
        ))}
      </CalendarGrid>
    </GridWrapper>
  </>
));
FullCalendar.propTypes = {
  calendar: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  slotCount: PropTypes.number.isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FullCalendar;

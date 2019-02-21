import React from 'react';
import PropTypes from 'prop-types';

import MobileDayContainer from '../containers/MobileDayContainer';
import Day from './Day';
import {
  CalendarGrid,
  PickerGrid,
  ScheduleGrid,
} from '../styles/MobileCalendar.styles';

const MobileCalendar = ({
  currentDayInd,
  days,
  day,
  slots,
  data,
  setCurrentDay,
}) => (
  <CalendarGrid>
    <PickerGrid rows={days.length}>
      {days.map((dayLabel, ind) => (
        <MobileDayContainer
          key={dayLabel}
          ind={ind}
          selected={currentDayInd === ind}
          day={dayLabel}
          columnStart={0}
          columnEnd={1}
          rowStart={ind + 2}
          rowEnd={ind + 3}
          setCurrentDate={setCurrentDay}
        />
      ))}
    </PickerGrid>
    <ScheduleGrid rows={slots.length}>
      <Day slot={0} data={data} headerText={day} />
    </ScheduleGrid>
  </CalendarGrid>
);

MobileCalendar.propTypes = {
  currentDayInd: PropTypes.number.isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  day: PropTypes.string.isRequired,
  slots: PropTypes.arrayOf(PropTypes.number).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrentDay: PropTypes.func.isRequired,
};

export default MobileCalendar;

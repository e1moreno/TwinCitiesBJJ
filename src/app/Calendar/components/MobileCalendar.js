import React, { Fragment, forwardRef } from 'react';
import PropTypes from 'prop-types';

import MobileDayContainer from '../containers/MobileDayContainer';
import Day from './Day';
import {
  CalendarGrid,
  PickerGrid,
  ScheduleGrid,
} from '../styles/MobileCalendar.styles';

const MobileCalendar = forwardRef(
  (
    {
      currentDayInd, days, day, data, setCurrentDay, slotCount, onExport,
    },
    ref,
  ) => (
    <Fragment>
      <div onClick={onExport}>export</div>
      <CalendarGrid ref={ref}>
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
        <ScheduleGrid rows={slotCount}>
          <Day slot={0} data={data} headerText={day} />
        </ScheduleGrid>
      </CalendarGrid>
    </Fragment>
  ),
);

MobileCalendar.propTypes = {
  currentDayInd: PropTypes.number.isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  day: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  slotCount: PropTypes.number.isRequired,
  setCurrentDay: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
};

export default MobileCalendar;

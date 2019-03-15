/* eslint-disable react/no-multi-comp */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Export as ExportIcon } from 'styled-icons/boxicons-regular';

import MobileDayPickContainer from '../containers/MobileDayPickContainer';
import MobileDay from './MobileDay';
import {
  CalendarWrapper,
  CalendarHeader,
  CalendarInstructions,
  CalendarTitle,
  CalendarExportIconWrapper,
  Icon,
  CalendarGridWrapper,
  CalendarGrid,
  PickerGrid,
  ScheduleGrid,
} from '../styles/MobileCalendar.styles';

const Header = ({ onExport }) => (
  <CalendarHeader>
    <CalendarInstructions>
      <CalendarTitle>Weekly Schedule</CalendarTitle>
    </CalendarInstructions>
    <CalendarExportIconWrapper>
      <Icon
        renderElement="button"
        Symbol={ExportIcon}
        onClick={onExport}
        title="Export Mobile Calendar"
      />
    </CalendarExportIconWrapper>
  </CalendarHeader>
);
Header.propTypes = {
  onExport: PropTypes.func.isRequired,
};

const Calendar = forwardRef(
  ({
    currentDayInd, days, data, setCurrentDay, slotCount,
  }, ref) => (
    <CalendarGridWrapper>
      <CalendarGrid ref={ref}>
        <PickerGrid rows={days.length}>
          {days.map((dayLabel, ind) => (
            <MobileDayPickContainer
              key={dayLabel}
              ind={ind}
              selected={currentDayInd === ind}
              day={dayLabel}
              columnStart={1}
              columnEnd={1}
              rowStart={ind + 1}
              rowEnd={ind + 2}
              setCurrentDate={setCurrentDay}
            />
          ))}
        </PickerGrid>
        <ScheduleGrid rows={slotCount}>
          <MobileDay slot={0} data={data} />
        </ScheduleGrid>
      </CalendarGrid>
    </CalendarGridWrapper>
  ),
);
Calendar.propTypes = {
  currentDayInd: PropTypes.number.isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  slotCount: PropTypes.number.isRequired,
  setCurrentDay: PropTypes.func.isRequired,
};

const MobileCalendar = forwardRef(
  ({
    currentDayInd, days, data, setCurrentDay, slotCount, onExport,
  }, ref) => (
    <CalendarWrapper>
      <Header onExport={onExport} />
      <Calendar
        ref={ref}
        currentDayInd={currentDayInd}
        days={days}
        data={data}
        setCurrentDay={setCurrentDay}
        slotCount={slotCount}
      />
    </CalendarWrapper>
  ),
);

MobileCalendar.propTypes = {
  currentDayInd: PropTypes.number.isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  slotCount: PropTypes.number.isRequired,
  setCurrentDay: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
};

export default MobileCalendar;

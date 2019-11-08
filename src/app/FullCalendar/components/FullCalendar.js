import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
// import dayjs from 'dayjs';
import { Export as ExportIcon } from 'styled-icons/boxicons-regular';

import FullDay from './FullDay';
import {
  GridWrapper,
  CalendarHeader,
  CalendarInstructions,
  CalendarTitle,
  CalendarExportIconWrapper,
  Icon,
  CalendarGrid,
} from '../styles/FullCalendar.styles';

// const formatTime = time => dayjs(time).format('hh:mm A');

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

const FullCalendar = forwardRef(
  ({
    calendar, days, slotCount, onExport,
  }, ref) => (
    <>
      <GridWrapper>
        <Header onExport={onExport} />
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
  ),
);
FullCalendar.propTypes = {
  calendar: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  slotCount: PropTypes.number.isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  onExport: PropTypes.func.isRequired,
};

export default FullCalendar;

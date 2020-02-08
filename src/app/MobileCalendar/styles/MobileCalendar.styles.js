import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  background: var(--white);
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -1px 8px rgba(0, 0, 0, 0.15);
`;

export const CalendarGridWrapper = styled.div``;

export const CalendarHeader = styled.div`
  display: flex;
  padding: 0 0 0 1rem;
  min-height: 2.5rem;
`;

export const CalendarInstructions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const CalendarTitle = styled.h3`
  margin: 0;
  color: var(--backgroundPurple);
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-areas: 'picker schedule';
  z-index: -1;
  color: var(--textGray);
  background-color: var(--white);
  border-top: solid 1px #e1e1e1;
`;

export const PickerGrid = styled.div`
  display: grid;
  grid-area: picker;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 80px)`};
`;

export const ScheduleGrid = styled.div`
  display: grid;
  grid-area: schedule;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
`;

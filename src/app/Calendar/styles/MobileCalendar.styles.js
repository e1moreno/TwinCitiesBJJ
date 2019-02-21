import styled from 'styled-components';

export const CalendarGrid = styled.div`
  display: grid;
  background-color: var(--white);
  grid-template-columns: 80px 1fr;
  grid-template-areas: 'picker schedule';
  z-index: -1;
`;

export const PickerGrid = styled.div`
  display: grid;
  grid-area: picker;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ rows }) => `48px repeat(${rows}, 80px)`};
`;

export const ScheduleGrid = styled.div`
  display: grid;
  grid-area: schedule;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ rows }) => `48px repeat(${rows}, 1fr)`};
`;

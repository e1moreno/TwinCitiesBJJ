import styled from 'styled-components';

export const CalendarGrid = styled.div`
  display: grid;
  background-color: var(--white);
  grid-template-columns: 0.8fr ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-template-rows: ${({ rows }) => `56px repeat(${rows}, 80px)`};
  z-index: -1;
`;

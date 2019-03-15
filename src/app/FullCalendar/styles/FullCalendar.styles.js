import styled from 'styled-components';
import { Icon as BaseIcon } from 'design/Icon';

export const GridWrapper = styled.div`
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -1px 8px rgba(0, 0, 0, 0.15);
`;

export const CalendarHeader = styled.div`
  display: flex;
  padding: 0 0 0 1rem;
  background-color: var(--white);
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

export const CalendarExportIconWrapper = styled.div``;

export const Icon = styled(BaseIcon)`
  height: 48px;
  width: 48px;
  background-color: var(--white);
  border: none;

  & .symbol-icon {
    height: 1.7rem;
    color: var(--textGray);
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-template-rows: ${({ rows }) => `56px repeat(${rows}, 70px)`};
  color: var(--textGray);
  background-color: var(--white);
  border-top: solid 1px #e1e1e1;
  z-index: -1;
`;

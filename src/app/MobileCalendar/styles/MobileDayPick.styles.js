import styled from 'styled-components';

export const DaySelection = styled.div`
  grid-column-start: ${({ columnStart }) => columnStart};
  grid-column-end: ${({ columnEnd }) => columnEnd};
  grid-row-start: ${({ rowStart }) => rowStart};
  grid-row-end: ${({ rowEnd }) => rowEnd};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.07rem;
  border-right: solid 1px #e1e1e1;
  color: ${({ selected }) => (selected ? 'var(--white)' : '#999')};
  background: ${({ selected }) =>
    selected ? 'var(--backgroundPurple)' : '#ffffff'};

  &:focus {
    outline: none;
    background: var(--backgroundPurple);
    color: var(--white);
  }
`;

import styled from 'styled-components';

export const DateSelection = styled.div`
  grid-column-start: ${({ columnStart }) => columnStart};
  grid-column-end: ${({ columnEnd }) => columnEnd};
  grid-row-start: ${({ rowStart }) => rowStart};
  grid-row-end: ${({ rowEnd }) => rowEnd};
  border-top: solid 1px #e1e1e1;
  border-right: ${({ selected }) => !selected && 'solid 1px #e1e1e1'};
  cursor: pointer;
`;

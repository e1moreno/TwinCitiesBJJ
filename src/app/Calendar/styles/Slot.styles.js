import styled from 'styled-components';

export const SlotWrapper = styled.div.attrs(
  ({
    blank, header, columnStart, columnEnd, rowStart, rowEnd,
  }) => ({
    style: {
      gridColumnStart: columnStart,
      gridColumnEnd: columnEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd,
      backgroundColor: !blank && 'var(--yellow)',
      ...(!header && {
        borderTop: 'solid 1px #e1e1e1',
        borderLeft: 'solid 1px #e1e1e1',
      }),
    },
  }),
)``;

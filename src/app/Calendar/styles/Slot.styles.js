import styled from 'styled-components';

export const SlotWrapper = styled.div.attrs(
  ({ blank, columnStart, columnEnd, rowStart, rowEnd, onClick }) => ({
    style: {
      gridColumnStart: columnStart,
      gridColumnEnd: columnEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd,
      color: blank ? 'var(--menuGray)' : 'var(--white)',
      backgroundColor: !blank && 'var(--backgroundPurple)',
      cursor: !!onClick && 'pointer',
    },
  }),
)`
  border-bottom: solid 1px #e1e1e1;
  border-right: solid 1px #e1e1e1;
`;

export const SlotContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 0.5rem;
  text-align: center;
`;

export const PrimaryText = styled.span`
  font-weight: 600;
  letter-spacing: 0.07rem;
`;

export const SecondaryText = styled.span`
  font-size: 0.9rem;
  letter-spacing: 0.07rem;
`;

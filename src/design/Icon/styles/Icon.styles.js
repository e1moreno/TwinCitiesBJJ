import styled, { css } from 'styled-components';

const IconBase = styled.div`
  &:focus {
    transform: translateY(1 px);
  }
`;

const baseStyle = () => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.a`
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RoundIconWrapper = styled(IconBase)`
  position: relative;
  cursor: pointer;
  border: solid 3px;
  border-radius: 50%;

  & .symbol-icon {
    ${baseStyle}
  }
`;

export const RegularIconWrapper = styled(IconBase)`
  position: relative;
  border-radius: 50%;
  color: ${props => props.color};
  cursor: pointer;

  & .symbol-icon {
    ${baseStyle}
  }
`;

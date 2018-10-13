import styled from 'styled-components';

const IconBase = styled.div`
  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:focus {
    transform: translateY(1 px);
  }
`;

export const RoundIconWrapper = styled(IconBase)`
  position: relative;
  min-width: 48px;
  min-height: 48px;
  background-color: var(--white);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.8), 0 0 14px rgba(0, 0, 0, 0.7),
    0 0 24px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: ${props => props.color};
  }
`;

export const RegularIconWrapper = styled(IconBase)`
  position: relative;
  min-width: 48px;
  min-height: 48px;
  border-radius: 50%;
  color: ${props => props.color};
  cursor: pointer;
`;

import styled from 'styled-components';
import Button from 'design/Button/Button';

export const InviteButtonContainer = styled(Button)`
  position: absolute;
  background-color: var(--orange);
  color: var(--white);
  border: solid 1px var(--orange);
  padding: 16px;
  z-index: 1;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  &:hover {
    background-color: var(--white);
    color: var(--orange);
  }
`;

export const InviteMainText = styled.h2`
  text-transform: uppercase;
  white-space: nowrap;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 1.1em;
  }
`;

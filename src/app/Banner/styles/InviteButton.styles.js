import styled from 'styled-components';
import Button from 'design/Button/Button';

export const InviteButtonContainer = styled(Button)`
  position: absolute;
  background-color: var(--orange);
  color: var(--white);
  border: solid 2px var(--orange);
  padding: 16px;
  z-index: 1;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  white-space: nowrap;
  font-weight: 700;

  &:hover {
    background-color: var(--white);
    color: var(--orange);
  }
`;

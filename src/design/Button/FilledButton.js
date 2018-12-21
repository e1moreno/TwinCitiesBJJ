import styled from 'styled-components';
import Button from 'design/Button/Button';

const FilledButton = styled(Button)`
  background-color: var(--orange);
  color: var(--white);
  border: solid 2px var(--orange);
  padding: 16px;

  text-transform: uppercase;
  white-space: nowrap;

  &:hover {
    background-color: var(--white);
    color: var(--orange);
  }
`;

export default FilledButton;

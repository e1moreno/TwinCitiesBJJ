import styled, { css } from 'styled-components';
import Button from 'design/Button/Button';

const BaseSettings = () => css`
  color: var(--white);
  background-color: var(--backgroundPurple);
  border: solid 2px var(--backgroundPurple);

  &:hover {
    background-color: var(--white);
    color: var(--backgroundPurple);
  }
`;

const InverseSettings = () => css`
  color: var(--backgroundPurple);
  background-color: var(--white);
  border: solid 2px var(--backgroundPurple);

  &:hover {
    background-color: var(--backgroundPurple);
    color: var(--white);
  }
`;

const FilledButton = styled(Button)`
  color: var(--white);
  background-color: var(--backgroundPurple);
  border: solid 2px var(--backgroundPurple);
  padding: 16px;

  text-transform: uppercase;
  white-space: nowrap;

  &:hover {
    background-color: var(--white);
    color: var(--backgroundPurple);
  }

  ${({ inverse }) => (!inverse ? BaseSettings : InverseSettings)}
`;

export default FilledButton;

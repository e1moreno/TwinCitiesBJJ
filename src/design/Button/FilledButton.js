import styled, { css } from 'styled-components';
import Button from 'design/Button/Button';

const BaseColors = css`
  background-color: var(--backgroundPurple);
  color: var(--white);
`;

const InverseColors = css`
  background-color: var(--white);
  color: var(--backgroundPurple);
`;

const BaseSettings = () => css`
  ${BaseColors}
  border: solid 2px var(--backgroundPurple);

  &:hover {
    ${InverseColors}
  }

  &:focus {
    ${InverseColors}
  }
`;

const InverseSettings = () => css`
  border: solid 2px var(--backgroundPurple);
  ${InverseColors}

  &:hover {
    ${BaseColors}
  }

  &:focus {
    ${BaseColors}
  }
`;

const FilledButton = styled(Button)`
  ${BaseColors}
  border: solid 2px var(--backgroundPurple);
  padding: 16px;

  text-transform: uppercase;
  white-space: nowrap;

  &:hover {
    ${InverseColors}
  }

  ${({ inverse }) => (!inverse ? BaseSettings : InverseSettings)}
`;

export default FilledButton;

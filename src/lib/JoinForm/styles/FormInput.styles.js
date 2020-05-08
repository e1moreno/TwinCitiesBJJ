import styled from 'styled-components';

import BaseInput from 'lib/Input/Input';

export const InputWrapper = styled.p`
  border-bottom: solid 1px #c4c4c4;
  padding: 8px 16px;
  margin: 0;
`;

export const Label = styled.label`
  color: #595959;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ focus }) => focus && 'var(--black)'};
`;

export const Input = styled(BaseInput)`
  padding-top: 8px;
  width: 100%;
  color: var(--purple);
`;

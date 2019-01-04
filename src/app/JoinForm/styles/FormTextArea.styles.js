import styled from 'styled-components';

import BaseTextArea from 'design/Input/TextArea';

export const InputWrapper = styled.p`
  padding: 8px 16px;
  margin: 0;
`;

export const Label = styled.label`
  color: #595959;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ focus }) => focus && 'var(--black)'};
`;

export const TextArea = styled(BaseTextArea)`
  padding-top: 8px;
  width: 100%;
  color: var(--purple);
`;

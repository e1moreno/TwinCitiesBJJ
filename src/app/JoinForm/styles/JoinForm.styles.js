import styled from 'styled-components';

import FilledButton from 'design/Button/FilledButton';

export const Form = styled.form`
  padding: 1px 0;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -1px 8px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  max-width: 768px;
  margin: 0 auto;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px 16px 16px;
`;

export const SubmitButton = styled(FilledButton)`
  font-weight: 600;
  padding: 8px 16px;
`;

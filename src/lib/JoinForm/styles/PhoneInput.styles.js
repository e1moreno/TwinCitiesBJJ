import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

import {
  InputWrapper as BaseInputWrapper,
  Label as BaseLabel,
} from './FormInput.styles';

export const InputWrapper = styled(BaseInputWrapper)``;

export const Label = styled(BaseLabel)``;

export const Input = styled(MaskedInput)`
  padding-top: 8px;
  width: 100%;
  color: var(--purple);
`;

import React from 'react';
import styled from 'styled-components';

import { Wrapper, InputLabel } from './Input';
import { GREY } from 'src/constant';

interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

function Textarea({ label, placeholder, onChange, value, name }: ITextareaProps) {
  return (
    <Wrapper>
      {label && <InputLabel value={label} />}
      <StyledTextArea label={label} value={value} name={name} placeholder={placeholder} onChange={onChange} />
    </Wrapper>
  );
}

export default React.memo(Textarea);

const StyledTextArea = styled.textarea<{ label?: string }>`
  width: 100%;
  padding: 0.8rem 0;
  font-size: 1.4rem;
  outline: none;
  border: none;
  resize: none;
  ::placeholder {
    color: ${GREY[500]};
    font-size: 1.4rem;
  }
  ${({ label }) =>
    label &&
    `
    margin-top: 0.2rem;
    `}
`;

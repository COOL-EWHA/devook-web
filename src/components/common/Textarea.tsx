import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/styles/colors';
import { Label, Wrapper } from './Input';

interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function Textarea({ label, placeholder, onChange, value }: ITextareaProps) {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <StyledTextArea label={label} placeholder={placeholder} onChange={onChange} value={value} />
    </Wrapper>
  );
}

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

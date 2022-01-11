import React from 'react';
import styled from 'styled-components';

import { CACTUS_GREEN, GREY } from 'src/styles/colors';
import { Label, Wrapper } from './Input';

interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function Textarea({ label, placeholder, onChange, value }: ITextareaProps) {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <StyledTextArea placeholder={placeholder} onChange={onChange} value={value} />
    </Wrapper>
  );
}

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 1.2rem 1rem;
  border-radius: 8px;
  font-size: 1.4rem;
  border: 1px solid ${GREY[700]};
  resize: none;

  :focus {
    outline: none;
    border: 1px solid ${CACTUS_GREEN[500]};
  }
  ::placeholder {
    color: ${GREY[500]};
    font-size: 1.2rem;
  }
`;

import React from 'react';
import styled from 'styled-components';

import { CACTUS_GREEN, WHITE, GREY } from 'src/styles/colors';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, placeholder, onChange, value }: IInputProps) {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <StyledInput placeholder={placeholder} onChange={onChange} value={value} />
    </Wrapper>
  );
}

export const Label = styled.label`
  position: absolute;
  top: -0.5rem;
  left: 1rem;

  padding: 0 0.4rem;
  background-color: ${WHITE};
  font-size: 1.4rem;
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;

  :focus-within {
    ${Label} {
      color: ${CACTUS_GREEN[500]};
    }
  
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1.2rem 1rem;
  border-radius: 8px;
  font-size: 1.4rem;
  border: 1px solid ${GREY[700]};

  :focus {
    outline: none;
    border: 1px solid ${CACTUS_GREEN[500]};
  }
  ::placeholder {
    color: ${GREY[500]};
    font-size: 1.2rem;
  }
`;

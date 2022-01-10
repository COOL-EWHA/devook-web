import React, { useState } from 'react';
import styled from 'styled-components';

import { CACTUS_GREEN, WHITE, GREY } from 'src/styles/colors';

type InputType = 'TEXTAREA' | 'INPUT';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  label?: string;
}

export default function Input({ type = 'INPUT', label, placeholder }: IInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Wrapper>
      {label && <Label isFocused={isFocused}>{label}</Label>}
      {type === 'INPUT' && (
        <StyledInput onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)} placeholder={placeholder} />
      )}
      {type === 'TEXTAREA' && (
        <StyledTextArea
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
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

const Label = styled.label<{ isFocused: boolean }>`
  position: absolute;
  top: -0.5rem;
  left: 1rem;

  padding: 0 0.4rem;
  background-color: ${WHITE};
  color: ${({ isFocused }) => (isFocused ? CACTUS_GREEN[500] : GREY[700])};
  font-size: 1.4rem;
`;

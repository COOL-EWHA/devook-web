import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import { CACTUS_GREEN, WHITE, GREY } from 'src/styles/colors';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  iconType?: string;
}

export default function Input({ label, iconType, placeholder, onChange, value }: IInputProps) {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      {iconType && <Icon type={iconType} width="2rem" />}
      <StyledInput placeholder={placeholder} onChange={onChange} value={value} iconType={iconType} />
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

const StyledInput = styled.input<{ iconType?: string }>`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  border: 1px solid ${GREY[700]};
  padding-left: ${({ iconType }) => iconType && '3.4rem'};
  ${({ iconType }) =>
    iconType === 'search' &&
    `
    height: 4rem;
    background-color: ${GREY[300]};
    border: none;
    outline: none;
  `}

  :focus {
    outline: none;
    border: 1px solid ${CACTUS_GREEN[500]};
  }
  ::placeholder {
    color: ${GREY[500]};
    font-size: 1.4rem;
  }
`;

const Icon = styled(MaterialIcon)`
  position: absolute;
  width: 3.4rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .material-icons {
    color: ${GREY[600]};
  }
`;

import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import { CACTUS_GREEN, WHITE, GREY } from 'src/constant';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  iconType?: string;
}

export default function Input({ label, iconType, placeholder, onChange, value, name }: IInputProps) {
  return (
    <Wrapper iconType={iconType}>
      {label && <Label>{label}</Label>}
      {iconType && <Icon type={iconType} width="2rem" color={GREY[600]} />}
      <StyledInput label={label} name={name} value={value} placeholder={placeholder} onChange={onChange} />
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

export const Wrapper = styled.div<{ iconType?: string }>`
  display: flex;
  position: relative;
  padding: 0.4rem 1.2rem;
  margin-bottom: 2rem;
  border: 1px solid ${GREY[700]};
  border-radius: 0.8rem;

  ${({ iconType }) =>
    iconType === 'search' &&
    `
    height: 4rem;
    background-color: ${GREY[200]};
    border: 1px solid ${GREY[200]};
    outline: none;
    `}

  :focus-within {
    border: 1px solid ${CACTUS_GREEN[500]};
    ${Label} {
      color: ${CACTUS_GREEN[500]};
    }
  }
`;

const StyledInput = styled.input<{ label?: string }>`
  width: 100%;
  padding: 0.8rem 0;
  font-size: 1.4rem;
  border: none;
  outline: none;
  background: inherit;
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

const Icon = styled(MaterialIcon)`
  margin-right: 0.4rem;
  margin-top: 0.1rem;
  height: 100%;
`;

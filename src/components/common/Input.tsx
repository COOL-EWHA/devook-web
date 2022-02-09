import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import { CACTUS_GREEN, WHITE, GREY } from 'src/constant';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  iconType?: string;
}

function Input({ label, iconType, placeholder, onChange, value, name, disabled = false }: IInputProps) {
  return (
    <Wrapper iconType={iconType} disabled={disabled}>
      {label && <InputLabel value={label} disabled={disabled} />}
      {iconType && <Icon type={iconType} width="2rem" color={GREY[600]} />}
      <StyledInput
        label={label}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </Wrapper>
  );
}

interface IInputLabelProps {
  value: string;
  disabled?: boolean;
}

export const InputLabel = React.memo(function InputLabel({ value, disabled = false }: IInputLabelProps) {
  return <Label disabled={disabled}>{value}</Label>;
});

export default React.memo(Input);

export const Label = styled.label<{ disabled: boolean }>`
  position: absolute;
  top: -0.5rem;
  left: 1rem;

  padding: 0 0.4rem;
  color: ${({ disabled }) => (disabled ? GREY[500] : GREY[900])};
  background-color: ${WHITE};
  font-size: 1.4rem;
`;

export const Wrapper = styled.div<{ iconType?: string; disabled?: boolean }>`
  display: flex;
  position: relative;
  padding: 0.4rem 1.2rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ disabled }) => (disabled ? GREY[500] : GREY[700])};
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
  &:disabled {
    color: ${GREY[500]};
  }
`;

const Icon = styled(MaterialIcon)`
  margin-right: 0.4rem;
  margin-top: 0.1rem;
  height: 100%;
`;

import React from 'react';
import styled from 'styled-components';

interface IMaterialIconProps {
  className?: string;
  type: string;
  width?: number | string;
}

export function MaterialIcon({ className, type, width }: IMaterialIconProps) {
  return (
    <Wrapper className={className}>
      <Icon className="material-icons" width={width}>
        {type}
      </Icon>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Icon = styled.span<{ width?: number | string }>`
  ${({ width }) => width && `font-size: ${width}`}
`;

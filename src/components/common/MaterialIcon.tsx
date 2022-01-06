import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/styles/colors';

interface IMaterialIconProps {
  className?: string;
  type: string;
  width?: number | string;
  color?: string;
  hoverColor?: string;
  onClick?: () => void;
}

export function MaterialIcon({ className, type, width, color, hoverColor, onClick }: IMaterialIconProps) {
  return (
    <Wrapper className={className} onClick={onClick}>
      <Icon className="material-icons" width={width} color={color} hoverColor={hoverColor}>
        {type}
      </Icon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.span<Pick<IMaterialIconProps, 'width' | 'color' | 'hoverColor'>>`
  ${({ width, color, hoverColor }) => `
  width: ${width || 'inherit'};
  color: ${color || GREY[700]};
  :hover {
    color: ${hoverColor || GREY[900]};
  }
  transition: all 0.3s;
  `}
`;

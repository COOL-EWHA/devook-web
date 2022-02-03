import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constant';

interface IMaterialIconProps {
  className?: string;
  type: string;
  width?: number | string;
  color?: string;
  hoverColor?: string;
  onClick?: () => void;
}

export default function MaterialIcon({ className, type, width, color, hoverColor, onClick }: IMaterialIconProps) {
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

type IconStyleProps = Pick<IMaterialIconProps, 'width' | 'color' | 'hoverColor'>;

const Icon = styled.span<IconStyleProps>`
  ${({ width, color, hoverColor }) => `
  font-size: ${width ?? '2.4rem'};
  color: ${color || GREY[700]};
  :hover {
    color: ${hoverColor || GREY[900]};
  }
  transition: all 0.3s;
  `}
`;

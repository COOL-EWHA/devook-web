import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constant';

interface IMaterialIconProps {
  className?: string;
  type: string;
  width?: number | string;
  color?: string;
  hoverColor?: string;
  disabled?: boolean;
}

function MaterialIcon({ className, type, width, color, hoverColor, disabled = false }: IMaterialIconProps) {
  return (
    <Wrapper className={className}>
      <Icon className="material-icons" width={width} color={color} hoverColor={hoverColor} disabled={disabled}>
        {type}
      </Icon>
    </Wrapper>
  );
}

export default React.memo(MaterialIcon);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

type IconStyleProps = Pick<IMaterialIconProps, 'width' | 'color' | 'hoverColor' | 'disabled'>;

const Icon = styled.span<IconStyleProps>`
  ${({ width, color, hoverColor, disabled }) => `
  font-size: ${width ?? '2.4rem'};
  color: ${color || GREY[700]};
  ${
    !disabled &&
    `
    :hover {
      color: ${hoverColor || GREY[900]};
    }
    transition: all 0.3s;
    cursor: pointer;
    `
  }
  `}
`;

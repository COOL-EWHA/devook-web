import React from 'react';
import styled, { css } from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import { GREY, CACTUS_GREEN } from 'src/styles/colors';

export type ButtonType = 'text' | 'icon' | 'border';
export type ButtonColorType = 'GREY' | 'CACTUS_GREEN';

interface IButtonProps {
  text: string;
  type?: ButtonType;
  iconType?: string;
  color?: ButtonColorType;
  height?: number | undefined;
  isBlock?: boolean;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  href?: string;
}

export default function Button({
  text,
  type = 'text',
  iconType,
  color = 'CACTUS_GREEN',
  height,
  isBlock = false,
  disabled = false,
  onClick,
  href,
}: IButtonProps) {
  if (type === 'icon' && iconType) {
    return (
      <Wrapper isBlock={isBlock} height={height} color={color} onClick={onClick} disabled={disabled}>
        <MaterialIcon color={color} type={iconType} />
        <P hasMarginLeft>{text}</P>
      </Wrapper>
    );
  }
  if (href) {
    return (
      <A href={href} target="_blank" rel="noopener">
        <Wrapper isBlock height={height} color={color} hasBorder disabled={disabled} onClick={onClick}>
          <P>{text}</P>
        </Wrapper>
      </A>
    );
  }
  return (
    <Wrapper
      isBlock={isBlock}
      height={height}
      color={color}
      hasBorder={type === 'border'}
      disabled={disabled}
      onClick={onClick}
    >
      <P>{text}</P>
    </Wrapper>
  );
}

interface IButtonStyleProps {
  isBlock: boolean;
  height: number | undefined;
  color: ButtonColorType;
  disabled: boolean;
  hasBorder?: boolean;
}

const Wrapper = styled.button<IButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ isBlock }) => (isBlock ? '100%' : 'fit-content')};
  height: ${({ height }) => `${height}rem` ?? 'fit-content'};

  background: none;
  outline: none;
  border: none;
  padding: 0;
  color: ${({ color }) => (color === 'CACTUS_GREEN' ? CACTUS_GREEN[500] : GREY[700])};

  ${({ hasBorder, color }) => getBorderStyle(color, hasBorder)}

  ${({ disabled }) => getDisabledStyle(disabled)}

  :hover {
    ${({ color, disabled }) => !disabled && getHoverStyle(color)}
  }
  transition: all 0.2s;
`;

const P = styled.p<{ hasMarginLeft?: boolean }>`
  font-size: 1.4rem;
  margin-left: ${({ hasMarginLeft }) => (hasMarginLeft ? 1 : 0)}rem;
`;

const A = styled.a`
  text-decoration: none;
`;

const getDisabledStyle = (disabled: boolean) => {
  if (disabled)
    return css`
      cursor: default;
      color: ${GREY[700]};
      .material-icons {
        color: ${GREY[700]};
      }
    `;

  return css`
    cursor: pointer;
  `;
};

const getHoverStyle = (color: ButtonColorType) => {
  if (color === 'CACTUS_GREEN')
    return css`
      color: ${CACTUS_GREEN[700]};
      border-color: ${CACTUS_GREEN[700]};
      .material-icons {
        color: ${CACTUS_GREEN[700]};
      }
    `;

  return css`
    color: ${GREY[900]};
    border-color: ${GREY[900]};
    .material-icons {
      color: ${GREY[900]};
    }
  `;
};

const getBorderStyle = (color: ButtonColorType, hasBorder?: boolean) => {
  if (hasBorder) {
    if (color === 'CACTUS_GREEN')
      return css`
        border-radius: 8px;
        border: 1px solid ${CACTUS_GREEN[500]};
      `;
    return css`
      border-radius: 8px;
      border: 1px solid ${GREY[700]};
    `;
  }
  return null;
};

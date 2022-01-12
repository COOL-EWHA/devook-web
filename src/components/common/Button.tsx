import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import { GREY, CACTUS_GREEN, WHITE } from 'src/styles/colors';

export type ButtonType = 'primary' | 'line' | 'text';
export type ButtonColorType = 'GREY' | 'CACTUS_GREEN';

interface IButtonProps {
  text: string;
  buttonType?: ButtonType;
  iconType?: string;
  iconWidth?: string;
  color?: ButtonColorType;
  height?: string;
  isBlock?: boolean;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  href?: string;
}

export default function Button({
  text,
  buttonType = 'text',
  iconType,
  iconWidth,
  color = 'CACTUS_GREEN',
  height,
  isBlock = false,
  disabled = false,
  onClick,
  href,
}: IButtonProps) {
  if (href) {
    return (
      <A href={href} target="_blank" rel="noopener">
        <Wrapper buttonType={buttonType} color={color} isBlock height={height} disabled={disabled} onClick={onClick}>
          <P>{text}</P>
        </Wrapper>
      </A>
    );
  }
  return (
    <Wrapper
      buttonType={buttonType}
      color={color}
      isBlock={isBlock}
      height={height}
      disabled={disabled}
      onClick={onClick}
    >
      {iconType && <MaterialIcon color={color} type={iconType} width={iconWidth} />}
      <P hasMarginLeft={iconType}>{text}</P>
    </Wrapper>
  );
}

const getDisabledStyle = (disabled: boolean, buttonType: ButtonType) => {
  if (disabled)
    return `
      cursor: default;
      color: ${GREY[500]};
      border-color: ${buttonType === 'line' && GREY[500]};
      background: ${buttonType === 'primary' ? GREY[200] : 'none'};
      .material-icons {
        color: ${GREY[500]};
        cursor: default;
      }
    `;
  return `
    cursor: pointer;
  `;
};

const getHoverStyle = (buttonType: ButtonType, color: ButtonColorType) => {
  if (buttonType === 'primary') {
    return `
      background-color: ${color === 'CACTUS_GREEN' ? CACTUS_GREEN[600] : GREY[600]};
    `;
  }
  return `
    color: ${color === 'CACTUS_GREEN' ? CACTUS_GREEN[700] : GREY[800]};
    border-color: ${color === 'CACTUS_GREEN' ? CACTUS_GREEN[700] : GREY[800]};
    .material-icons {
      color: ${color === 'CACTUS_GREEN' ? CACTUS_GREEN[700] : GREY[800]};
    }
  `;
};

const getButtonStyle = (buttonType: ButtonType, color: ButtonColorType) => {
  switch (buttonType) {
    case 'primary':
      return `
        background-color: ${color === 'CACTUS_GREEN' ? CACTUS_GREEN[500] : GREY[500]};
        color: ${WHITE};
        border-radius: 8px;
        padding: 0.4rem 1rem;
      `;
    case 'line':
      return `
        color: ${color === 'CACTUS_GREEN' ? CACTUS_GREEN[500] : GREY[700]};
        border-radius: 8px;
        padding: 0.4rem 1rem;
        border: 1px solid ${color === 'CACTUS_GREEN' ? CACTUS_GREEN[500] : GREY[700]};
      `;
    case 'text':
      return `
        color: ${color === 'CACTUS_GREEN' ? CACTUS_GREEN[500] : GREY[700]};
      `;
    default:
      return null;
  }
};

const Wrapper = styled.button<{
  buttonType: ButtonType;
  color: ButtonColorType;
  disabled: boolean;
  isBlock?: boolean;
  height?: string;
}>`
  display: flex;
  align-items: center;
  background: none;
  outline: none;
  border: none;
  padding: 0;

  ${({ isBlock, height, buttonType, color, disabled }) => `
    width:${isBlock ? '100%' : 'fit-content'};
    height:${height ?? 'fit-content'};
    ${getButtonStyle(buttonType, color)};
    ${getDisabledStyle(disabled, buttonType)};
    :hover{
      ${!disabled && getHoverStyle(buttonType, color)}
    }
  `}
  transition: all 0.2s;
`;

const P = styled.p<{ hasMarginLeft?: string }>`
  font-size: 1.4rem;
  margin-left: ${({ hasMarginLeft }) => (hasMarginLeft ? 1 : 0)}rem;
`;

const A = styled.a`
  text-decoration: none;
`;

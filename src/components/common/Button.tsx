/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import { BUTTON_FONT_SIZE, BUTTON_HEIGHT, BUTTON_ICON_WIDTH, CACTUS_GREEN, GREY, WHITE } from 'src/constant';

export type ButtonType = 'primary' | 'line' | 'text';
export type ButtonSize = 'large' | 'medium' | 'small';

export interface IButtonProps {
  type?: ButtonType;
  text: string;
  iconType?: string;
  isBlock?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  href?: string;
  target?: '_self' | '_blank';
  className?: string;
}

export default function Button({
  type = 'text',
  text,
  iconType,
  isBlock = false,
  size = 'medium',
  disabled = false,
  onClick,
  href,
  target = '_self',
  className,
}: IButtonProps) {
  return (
    <Wrapper
      className={className}
      buttonType={type}
      size={size}
      isBlock={isBlock}
      href={href}
      target={target}
      onClick={onClick}
      disabled={disabled}
    >
      {iconType && (
        <Icon color={type === 'primary' ? WHITE : CACTUS_GREEN[500]} type={iconType} width={BUTTON_ICON_WIDTH[size]} />
      )}
      {text}
    </Wrapper>
  );
}

type ButtonWrapperProps = Omit<IButtonProps, 'type' | 'text' | 'iconType'> & {
  buttonType: ButtonType;
  children: React.ReactNode;
};

function Wrapper(props: ButtonWrapperProps) {
  const { href, target, children, ...commonProps } = props;

  if (href) {
    return (
      <A href={href} target={target} {...commonProps}>
        {children}
      </A>
    );
  }

  return <StyledButton {...commonProps}>{children}</StyledButton>;
}

type ButtonStyleProps = Pick<ButtonWrapperProps, 'size' | 'isBlock' | 'disabled' | 'buttonType'>;

const getWrapper = (type: 'button' | 'a') => styled(type)<ButtonStyleProps>`
  display: flex;
  align-items: center;
  line-height: 1.5;
  justify-content: center;
  background: none;
  outline: none;
  border: none;
  text-decoration: none;
  border-radius: 0.8rem;
  transition: all 0.2s;
  ${({ isBlock, size = 'medium', buttonType }) =>
    `
    width: ${isBlock ? '100%' : 'fit-content'};
    height: ${buttonType === 'text' ? 'fit-content' : BUTTON_HEIGHT[size]};
    padding: ${buttonType === 'text' ? 0 : '0.4rem 1rem'};
    font-size: ${BUTTON_FONT_SIZE[size]};
  `}
  ${({ buttonType, disabled }) =>
    disabled
      ? `
      color: ${GREY[500]};
      background-color: ${buttonType === 'primary' ? GREY[200] : WHITE};
      border: 1px solid ${buttonType === 'line' ? GREY[500] : 'transparent'};
      cursor: default;
      .material-icons {
          color: ${GREY[500]};
          cursor: default;
      }
      `
      : `
      color: ${buttonType === 'primary' ? WHITE : CACTUS_GREEN[500]};
      background-color: ${buttonType === 'primary' ? CACTUS_GREEN[700] : WHITE};
      border: 1px solid ${buttonType === 'line' ? CACTUS_GREEN[500] : 'transparent'};
      cursor: pointer;
      :hover {
          color: ${buttonType === 'primary' ? WHITE : CACTUS_GREEN[700]};
          background-color: ${buttonType === 'primary' ? CACTUS_GREEN[900] : WHITE};
          border: 1px solid ${buttonType === 'line' ? CACTUS_GREEN[700] : 'transparent'};
          .material-icons {
            color: ${buttonType === 'primary' ? WHITE : CACTUS_GREEN[700]};
          }
      }
  `}
`;

const A = getWrapper('a');

const StyledButton = getWrapper('button');

const Icon = styled(MaterialIcon)`
  margin-right: 0.2rem;
`;

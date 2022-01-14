import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import { CACTUS_GREEN, GREY, WHITE } from 'src/constant';

type FixedButtonType = 'tag' | 'scroll';

interface IFixedButtonProps {
  onClick?: () => void;
  buttonType: FixedButtonType;
  iconType: string;
}

export default function FixedButton({ onClick, buttonType, iconType }: IFixedButtonProps) {
  return (
    <Wrapper onClick={onClick} buttonType={buttonType}>
      <MaterialIcon
        type={iconType}
        width={buttonType === 'tag' ? '2.4rem' : '2.8rem'}
        color={CACTUS_GREEN[500]}
        hoverColor={CACTUS_GREEN[700]}
      />
    </Wrapper>
  );
}

const Wrapper = styled.button<{ buttonType: FixedButtonType }>`
  position: fixed;

  @media screen and (min-width: 1025px) {
    right: 3.2rem;
    bottom: 3.2rem;

    ${({ buttonType }) => buttonType === 'tag' && 'display:none'}
  }

  @media screen and (max-width: 1024px) {
    right: 2rem;
    bottom: ${({ buttonType }) => (buttonType === 'tag' ? 12.8 : 8)}rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;

  background-color: ${WHITE};
  border: none;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px, rgb(255 255 255 / 20%) 0px 0px 0px 1px inset !important;

  transition: all 0.3s;
  :hover {
    cursor: pointer;
    background-color: ${GREY[200]};
  }
`;

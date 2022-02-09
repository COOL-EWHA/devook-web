import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import { CACTUS_GREEN, GREY } from 'src/constant';

export type IconButtonType = 'primary' | 'secondary';

export interface IIconButtonProps {
  className?: string;
  type?: IconButtonType;
  iconType: string;
  iconWidth?: number | string;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function IconButton({
  type = 'secondary',
  iconType,
  iconWidth,
  disabled = false,
  onClick,
  className,
}: IIconButtonProps) {
  return (
    <Wrapper className={className} onClick={onClick} disabled={disabled}>
      <MaterialIcon
        color={type === 'primary' ? CACTUS_GREEN[500] : GREY[700]}
        hoverColor={type === 'primary' ? CACTUS_GREEN[700] : GREY[900]}
        type={iconType}
        width={iconWidth}
      />
    </Wrapper>
  );
}

export default React.memo(IconButton);

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: none;
`;

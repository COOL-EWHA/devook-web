/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from '.';
import { CACTUS_GREEN, GREY } from 'src/constant';

interface ICheckboxProps {
  isChecked?: boolean;
  onClick: () => void;
}

function Checkbox({ isChecked, onClick }: ICheckboxProps) {
  const [color, hoverColor] = isChecked ? [CACTUS_GREEN[500], CACTUS_GREEN[700]] : [GREY[300], GREY[500]];
  return (
    <>
      <Input id="checkbox" type="checkbox" checked={isChecked} onChange={onClick} />
      <label htmlFor="checkbox">
        <MaterialIcon type="check_box" color={color} hoverColor={hoverColor} />
      </label>
    </>
  );
}

export default Checkbox;

const Input = styled.input`
  display: none;
`;

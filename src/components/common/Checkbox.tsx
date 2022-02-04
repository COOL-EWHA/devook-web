/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from '.';
import { CACTUS_GREEN, GREY } from 'src/constant';

interface ICheckboxProps {
  id: string;
  isChecked?: boolean;
  toggle: () => void;
}

function Checkbox({ id, isChecked, toggle }: ICheckboxProps) {
  const [color, hoverColor] = isChecked ? [CACTUS_GREEN[500], CACTUS_GREEN[700]] : [GREY[300], GREY[500]];
  return (
    <>
      <Input id={id} type="checkbox" checked={isChecked} onChange={toggle} />
      <label htmlFor={id}>
        <MaterialIcon type="check_box" color={color} hoverColor={hoverColor} />
      </label>
    </>
  );
}

export default Checkbox;

const Input = styled.input`
  display: none;
`;

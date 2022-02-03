import React from 'react';

import { MaterialIcon } from '.';
import { CACTUS_GREEN, GREY } from 'src/constant';

interface ICheckboxProps {
  isChecked?: boolean;
  onClick: () => void;
}

function Checkbox({ isChecked, onClick }: ICheckboxProps) {
  return (
    <>
      {isChecked && (
        <MaterialIcon type="check_box" color={CACTUS_GREEN[500]} hoverColor={CACTUS_GREEN[600]} onClick={onClick} />
      )}
      {!isChecked && <MaterialIcon type="check_box" color={GREY[400]} hoverColor={GREY[500]} onClick={onClick} />}
    </>
  );
}

export default Checkbox;

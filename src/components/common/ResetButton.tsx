import React from 'react';

import { Button } from 'src/components/common';

interface IResetButtonProps {
  onClick: (e?: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => void;
  className?: string;
}

function ResetButton({ onClick, className }: IResetButtonProps) {
  return (
    <Button className={className} size="small" type="line" iconType="restart_alt" text="초기화" onClick={onClick} />
  );
}

export default React.memo(ResetButton);

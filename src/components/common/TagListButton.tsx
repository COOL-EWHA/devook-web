import React from 'react';

import { FixedButton } from 'src/components/common';

interface ITagListButtonProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function TagListButton({ setIsModalOpen }: ITagListButtonProps) {
  const handleClick = () => {
    setIsModalOpen(true);
  };

  return <FixedButton type="tag" iconType="tag" onClick={handleClick} />;
}

export default TagListButton;

import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { IconButton } from 'src/components/common';
import { Sidebar } from '.';
import { isMySidebarOpen } from 'src/lib/store';

export default function MySidebarToggleButton() {
  const [isOpen, setIsOpen] = useRecoilState(isMySidebarOpen);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} />
      {isOpen && <Sidebar onClose={handleClose} />}
    </>
  );
}

const Button = styled(IconButton).attrs({ iconType: 'person' })`
  margin-left: 0.4rem;
`;

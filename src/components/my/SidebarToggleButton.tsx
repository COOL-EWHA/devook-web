import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';
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
      <Button onClick={handleOpen}>
        <ProfileIcon />
      </Button>
      {isOpen && <Sidebar onClose={handleClose} />}
    </>
  );
}

const Button = styled.button`
  padding: 0;
  background: none;
  border: none;
  margin-left: 0.4rem;
`;

const ProfileIcon = styled(MaterialIcon).attrs({ type: 'person' })``;

import React, { useState } from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import { Sidebar } from '.';

export default function MySidebarToggleButton() {
  const [isOpen, setIsOpen] = useState(false);

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

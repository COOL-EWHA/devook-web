import React, { useState } from 'react';
import styled from 'styled-components';

import { IconButton } from 'src/components/common';
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
      <Button onClick={handleOpen} />
      {isOpen && <Sidebar onClose={handleClose} />}
    </>
  );
}

const Button = styled(IconButton).attrs({ iconType: 'person' })`
  margin-left: 0.4rem;
`;

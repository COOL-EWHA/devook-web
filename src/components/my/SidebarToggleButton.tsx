import React, { lazy, Suspense, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { IconButton } from 'src/components/common';
import { isMySidebarOpen } from 'src/lib/store';

const Sidebar = lazy(() => import('src/components/my/Sidebar'));

export default function MySidebarToggleButton() {
  const [isOpen, setIsOpen] = useRecoilState(isMySidebarOpen);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <Button onClick={handleOpen} />
      <Suspense fallback={null}>{isOpen && <Sidebar />}</Suspense>
    </>
  );
}

const Button = styled(IconButton).attrs({ iconType: 'person' })`
  margin-left: 0.4rem;
`;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Modal } from 'src/components/common';
import { BackHeader, MainHeader } from 'src/components/base/header';

const SUB_ROUTES = [{ pathname: '/my', title: '마이페이지' }];

function GlobalHeader({
  setIsModalOpened,
  isModalOpened,
}: {
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpened: boolean;
}) {
  const { pathname } = useLocation();

  return (
    <>
      <MainHeader isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
      {SUB_ROUTES.find((r) => r.pathname === pathname) && (
        <BackHeader
          isModalOpened={isModalOpened}
          title={SUB_ROUTES.find((r) => r.pathname === pathname)?.title}
          setIsModalOpened={setIsModalOpened}
        />
      )}
    </>
  );
}

export default GlobalHeader;

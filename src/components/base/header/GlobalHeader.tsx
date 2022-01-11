import React from 'react';
import { useLocation } from 'react-router-dom';

import { BackHeader, MainHeader } from 'src/components/base/header';

const SUB_ROUTES = [{ pathname: '/my', title: '마이페이지' }];

export default function GlobalHeader() {
  const { pathname } = useLocation();

  return (
    <>
      <MainHeader />
      {SUB_ROUTES.find((subRoute) => subRoute.pathname === pathname) && (
        <BackHeader title={SUB_ROUTES.find((subRoute) => subRoute.pathname === pathname)?.title} />
      )}
    </>
  );
}

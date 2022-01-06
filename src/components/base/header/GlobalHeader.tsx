import React from 'react';
import { useLocation } from 'react-router-dom';
import { BackHeader, MainHeader } from '.';

const SUB_ROUTES = [{ pathname: '/my', title: '마이페이지' }];

function GlobalHeader() {
  const { pathname } = useLocation();
  return (
    <>
      <MainHeader />
      {SUB_ROUTES.find((r) => r.pathname === pathname) && (
        <BackHeader title={SUB_ROUTES.find((r) => r.pathname === pathname)?.title} />
      )}
    </>
  );
}

export default GlobalHeader;

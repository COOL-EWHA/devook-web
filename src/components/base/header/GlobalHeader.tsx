import React from 'react';
import { useLocation } from 'react-router-dom';
import { BackHeader, MainHeader } from '.';

const SUB_ROUTES = ['/my'];

function GlobalHeader() {
  const { pathname } = useLocation();
  return (
    <>
      <MainHeader />
      {SUB_ROUTES.includes(pathname) && <BackHeader />}
    </>
  );
}

export default GlobalHeader;

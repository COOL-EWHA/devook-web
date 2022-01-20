import React from 'react';
import { useLocation } from 'react-router-dom';

import { BackHeader, MainHeader } from 'src/components/base';
import { SUB_ROUTES } from 'src/constant';

export default function GlobalHeader() {
  const { pathname } = useLocation();

  return (
    <>
      <MainHeader />
      {SUB_ROUTES.find((subRoute) => pathname.includes(subRoute.pathname)) && <BackHeader />}
    </>
  );
}

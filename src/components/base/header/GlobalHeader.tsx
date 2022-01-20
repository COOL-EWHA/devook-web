import React from 'react';
import { useLocation } from 'react-router-dom';

import { BackHeader, MainHeader } from 'src/components/base';
import { SUB_ROUTES } from 'src/constant';

export default function GlobalHeader() {
  const { pathname } = useLocation();
  const subRouteData = SUB_ROUTES.find((subRoute) => pathname.includes(subRoute.pathname));

  return (
    <>
      <MainHeader />
      {subRouteData && <BackHeader title={subRouteData.title} />}
    </>
  );
}

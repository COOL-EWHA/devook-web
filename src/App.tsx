import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import GlobalStyle from 'src/styles/global';
import MainLayout from 'src/layout/MainLayout';
import My from 'src/components/my';
import LoginRedirect from 'src/components/login-redirect';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Outlet />
                <p>hi</p>
              </>
            }
          >
            <Route path="my" element={<My />} />
          </Route>
          <Route path="/login-redirect" element={<LoginRedirect />} />
        </Routes>
      </MainLayout>
    </RecoilRoot>
  );
}

export default App;

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import GlobalStyle from 'src/styles/global';
import MainLayout from 'src/layout/MainLayout';
import My from 'src/components/my';
import OauthRedirect from 'src/components/OauthRedirect';

function App() {
  return (
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
            <Route path="/oauth-redirect" element={<OauthRedirect />} />
        </Routes>
      </MainLayout>
  );
}

export default App;

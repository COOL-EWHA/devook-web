import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import MainLayout from 'src/layout/MainLayout';
import My from 'src/pages/my';
import OauthRedirect from 'src/components/OauthRedirect';
import TestLogin from './components/TestLogin';

import { useAuthRefresh } from 'src/lib/hooks/auth';

function App() {
  const { loading } = useAuthRefresh();

  return (
    <MainLayout>
      <Routes>
        {!loading && (
          <>
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
            <Route path="/test-login" element={<TestLogin />} />
          </>
        )}
      </Routes>
    </MainLayout>
  );
}

export default App;

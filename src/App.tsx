import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import GlobalStyle from 'src/styles/global';
import MainLayout from 'src/layout/MainLayout';
import My from 'src/components/My';

function App() {
  return (
    <>
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
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;

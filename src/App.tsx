import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import MyPage from 'src/pages/my';
import { Button } from 'src/components/common';

import GlobalStyle from 'src/styles/global';
import MainLayout from 'src/layout/MainLayout';

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
                <Button text="primary 타입" buttonType="primary" />
                <Button text="primary 타입 (disabled)" buttonType="primary" disabled />
                <Button text="primary 타입 (GREY 색상 지정)" buttonType="primary" color="GREY" />
                <Button text="text 타입" />
                <Button text="text 타입(disabled)" disabled />
                <Button text="text 타입 (GREY 색상 지정)" color="GREY" />
                <Button text="line 타입" buttonType="line" />
                <Button text="line 타입 (height 지정)" buttonType="line" height="5rem" />
                <Button text="line 타입 (height + isBlock 지정)" buttonType="line" height="5rem" isBlock />
                <Button text="line 타입 (GREY 색상 지정)" buttonType="line" color="GREY" />
                <Button text="line 타입 (disabled)" buttonType="line" disabled />
                <Button
                  text="href + line 타입"
                  buttonType="line"
                  href="https://yamoo9.gitbook.io/typescript/interface/extends"
                />
                <Button text="아이콘 있을때" iconType="person" />
                <Button text="아이콘 있을때 (disabled)" iconType="person" disabled />
                <Button text="아이콘 있을때(GREY 색상 지정)" iconType="person" color="GREY" />
              </>
            }
          >
            <Route path="my" element={<MyPage />} />
          </Route>
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;

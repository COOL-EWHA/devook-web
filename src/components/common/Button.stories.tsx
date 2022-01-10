import React from 'react';

import { Button } from 'src/components/common';

export default {
  title: 'Button',
  component: Button,
};

export function TextButton() {
  return (
    <>
      <Button text="일반 텍스트 버튼" />
      <Button text="일반 텍스트 버튼(disabled)" disabled />
    </>
  );
}
export function IconButton() {
  return <Button type="icon" iconType="person" text="아이콘 있는 버튼" />;
}
export function BorderButton() {
  return (
    <Button
      text="border + external link 버튼"
      type="border"
      href="https://github.com/COOL-EWHA/devook-web"
      height={4}
    />
  );
}

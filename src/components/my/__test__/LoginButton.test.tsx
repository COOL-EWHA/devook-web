import React from 'react';
import { render, screen } from '@testing-library/react';

import LoginButton from 'src/components/my/LoginButton';

describe('LoginButton component', () => {
  it('플랫폼에 맞게 버튼텍스트가 잘 렌더링되는지 테스트  ', () => {
    render(<LoginButton platform="google" />);
    expect(screen.getByText('GOOGLE 계정으로 시작하기')).toBeInTheDocument();
  });
});

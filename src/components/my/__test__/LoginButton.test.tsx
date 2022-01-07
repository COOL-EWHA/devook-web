import React from 'react';
import { render, screen } from '@testing-library/react';

import LoginButton from 'src/components/my/LoginButton';
import GithubIcon from 'src/components/assets/icons/github';

describe('LoginButton component', () => {
  it('플랫폼에 맞게 버튼텍스트가 잘 렌더링되는지 테스트  ', () => {
    render(
      <LoginButton platform="github">
        <GithubIcon />
      </LoginButton>,
    );
    expect(screen.getByText('GITHUB 계정으로 시작하기')).toBeInTheDocument();
  });
});

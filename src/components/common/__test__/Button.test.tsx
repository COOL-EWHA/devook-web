import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button, { ButtonColorType, ButtonType } from 'src/components/common/Button';

import { GREY, CACTUS_GREEN } from 'src/styles/colors';

describe('<Button />', () => {
  const onClick = jest.fn();

  const setup = ({
    text,
    type = 'text',
    href,
    onClick,
    color = 'CACTUS_GREEN',
    height,
    isBlock,
    disabled = false,
  }: {
    text: string;
    type?: ButtonType;
    href?: string;
    onClick?: jest.Mock<void, []>;
    color?: ButtonColorType;
    height?: number | undefined;
    isBlock?: boolean;
    disabled?: boolean;
  }) => {
    return render(
      <Button
        text={text}
        type={type}
        href={href}
        color={color}
        onClick={onClick}
        height={height}
        isBlock={isBlock}
        disabled={disabled}
      />,
    );
  };

  it('text, color, isBlock, height props가 잘 작동하는지, type props가 default값으로 text가 되는지 테스트', () => {
    setup({
      text: '버튼 텍스트가 잘 전달되었을까',
      color: 'GREY',
      height: 4,
      isBlock: true,
    });

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('버튼 텍스트가 잘 전달되었을까');
    expect(button).toHaveStyle({
      color: `${GREY[700]}`,
      width: '100%',
      height: '4rem',
    });
    expect(button).not.toHaveStyle({
      border: `1px solid ${GREY[700]}`,
    });
  });

  it('버튼 클릭 이벤트가 동작하는지 테스트', () => {
    setup({ text: 'example', onClick });

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it('href가 있을때, 자동으로 border 스타일을 가지는지 테스트', () => {
    setup({
      text: 'example',
      href: 'https://github.com/testing-library/jest-dom#tohavestyle',
      onClick,
    });

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      color: `${CACTUS_GREEN[500]}`,
      border: `1px solid ${CACTUS_GREEN[500]}`,
    });
  });
});

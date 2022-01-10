import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input, { InputType } from 'src/components/common/Input';

describe('<Input />', () => {
  const setup = ({ type = 'INPUT', label }: { type?: InputType; label?: string }) => {
    return render(<Input type={type} label={label} />);
  };

  it('label props가 있을때 잘 작동하는지 테스트', () => {
    setup({ label: 'label example' });

    const inputLabel = screen.getByText('label example');

    expect(inputLabel).toBeInTheDocument();
  });

  it('input에 타이핑하면 focus되고, 타이핑한 값과 일치하는 value를 가지는지 테스트', () => {
    setup({});

    const input = screen.getByRole('textbox');

    userEvent.click(input);
    expect(input).toHaveFocus();

    userEvent.type(input, 'input value');
    expect(input).toHaveValue('input value');
  });
});

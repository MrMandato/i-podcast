// eslint-disable-next-line no-unused-vars
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { useInput } from './useInput'

describe('useInput', () => {
  test('should update the value when onChange handler is called', () => {
    const TestComponent = () => {
      const [inputProps] = useInput('initial value');
      return <input {...inputProps} />;
    };

    const { getByRole } = render(<TestComponent />);
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'new value' } });

    expect(input.value).toBe('new value');
  })
})


import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hello from '../../src/components/Hello';

test('renders hello with name', () => {
  render(<Hello name="Maureen" />);
  expect(screen.getByTestId('hello')).toHaveTextContent('Hello, Maureen');
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/react with nodejs/i);
  expect(linkElement).toBeInTheDocument();
});

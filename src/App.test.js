import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

test('renders todo headline', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Todo/i);
  expect(headerElement).toBeInTheDocument();
});

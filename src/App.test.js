import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

test('renders todo headline', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Todo/i);
  expect(linkElement).toBeInTheDocument();
});

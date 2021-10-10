import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/環境変数REACT_APP_NODE_ENVの値は/i);
  expect(linkElement).toBeInTheDocument();
});

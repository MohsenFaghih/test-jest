import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('name-link')
  expect(linkElement).toBeInTheDocument();
});

test('is Url correct?', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mohsen Faghih/i);
  expect(linkElement.href).toContain('mohsenfaghih.ir');
})

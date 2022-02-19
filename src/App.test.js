import { render, screen } from '@testing-library/react';
import App from './App';
import NavBarHeader from './view/NavBarHeader';

test('renders About text in main view on render', () => {
  render(<App />);
  const linkElement = screen.getByText(/О курсе/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Nav bar header Title', () => {
  render(<NavBarHeader />);
  const linkElement = screen.getByText(/Изучение React/i);
  expect(linkElement).toBeInTheDocument();
});

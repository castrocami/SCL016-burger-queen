import { render, screen } from '@testing-library/react';
import SendOrder from './SendOrder';

test('renders learn react link', () => {
  render(<SendOrder />);
  const linkElement = screen.getByText(/Enviar a Cocina/i);
  expect(linkElement).toBeInTheDocument();
});
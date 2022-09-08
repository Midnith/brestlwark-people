import { render, screen } from '@testing-library/react';
import App from './App';

describe("App component",() => {
  test('render title', () => {
    render(<App />);

    const title = screen.getByText(/Brastlewark 🧙‍♂️/i)
    expect(title).toBeInTheDocument();
  });
  test('render gnome list', async () => {
    render(<App />);

    const gnomeItems = await screen.findAllByRole("contentinfo")
    expect(gnomeItems).not.toHaveLength(0);
  });
});



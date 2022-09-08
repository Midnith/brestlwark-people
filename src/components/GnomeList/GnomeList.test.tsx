import { render, screen, fireEvent } from '@testing-library/react';
import GnomeList from "./GnomeList";

describe("GnomeList component",() => {

    test('Render to top scroll button', () => {
      render(<GnomeList gnomes={[]} />);

      fireEvent.scroll(window, { target: { scrollY: 500 } });

      const topButton: HTMLElement = screen.getByTestId("to-top");
      expect(topButton).toBeInTheDocument();
    });
  });

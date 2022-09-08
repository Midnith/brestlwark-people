import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  describe("Renders", () => {
    test("Render - Title", () => {
      render(<App />);

      const title = screen.getByText(/Brastlewark citizens 🧙‍♂️/i);
      expect(title).toBeInTheDocument();
    });

    test("Render - Spiner", () => {
      render(<App />);

      const title = screen.getByTestId(/spinner/i);
      expect(title).toBeInTheDocument();
    });

    test("Render - Searchbar", async () => {
      render(<App />);

      const searchBar: HTMLInputElement = await screen.findByRole("searchbox");
      expect(searchBar).toBeInTheDocument();
    });

    test("Render - Gnome list", async () => {
      render(<App />);

      let gnomeItems: HTMLElement = await screen.findByRole("contentinfo");
      expect(gnomeItems).toBeInTheDocument();
    });
  });

  describe("Searchbar functionality", () => {
    test("Searchbar - Target value changes", async () => {
      render(<App />);

      const searchBar: HTMLInputElement = await screen.findByRole("searchbox");

      fireEvent.change(searchBar, { target: { value: "Testing Unit" } });
      expect(searchBar.value).toBe("Testing Unit");
    });

    test("Searchbar - Successful search", async () => {
      render(<App />);

      const searchBar: HTMLInputElement = await screen.findByRole("searchbox");
      fireEvent.change(searchBar, { target: { value: "Malbin" } });

      const gnomeItems: HTMLElement[] = screen.getAllByTestId("gnome-card");
      expect(gnomeItems).not.toHaveLength(0);
    });

    test("Searchbar - Unsuccessful search", async () => {
      render(<App />);

      const searchBar: HTMLInputElement = await screen.findByRole("searchbox");
      fireEvent.change(searchBar, { target: { value: "sdfdsñç-56ç" } });

      const gnomeItems: HTMLElement[] = screen.queryAllByTestId("gnome-card");
      expect(gnomeItems).toHaveLength(0);
    });
  });
});

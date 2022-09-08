import { render, screen, fireEvent } from "@testing-library/react";
import Gnome from "./Gnome";

const myGnomes = [
    {
      id: 0,
      name: "María",
      professions: ["Gardener", "Tailor"],
      friends: ["Paula"],
      age: 235,
      weight: 28.5,
      height: 110,
      hair_color: "Pink",
    },
    {
      id: 0,
      name: "Paula",
      professions: [],
      friends: [],
      age: 221,
      weight: 23.5,
      height: 108.4,
      hair_color: "Brown",
    },
  ];

const myGnome = {
    id: 0,
    name: "María",
    professions: ["Gardener", "Tailor"],
    friends: ["Paula"],
    age: 235,
    weight: 28.5,
    height: 110,
    hair_color: "Pink",
  }


describe("Gnome component", () => {
  test("Render Gnome Card", () => {
    render(
      <Gnome
        id={0}
        gnomes={myGnomes}
        gnome={myGnome}
      />
    );

    const gnomeCard: HTMLElement = screen.getByTestId("gnome-card");
    expect(gnomeCard).toBeInTheDocument();
  });

  test("Render Modal", () => {
    render(
      <Gnome
        id={0}
        gnomes={myGnomes}
        gnome={myGnome}
      />
    );

    const detailsButton: HTMLElement = screen.getByTestId("details");
    fireEvent.click(detailsButton);

    const gnomeModal: HTMLElement = screen.getByText(/gnome details/i);
    expect(gnomeModal).toBeInTheDocument();
  });

  test("Close Modal - Backdrop", () => {
    render(
      <Gnome
        id={0}
        gnomes={myGnomes}
        gnome={myGnome}
      />
    );

    const detailsButton: HTMLElement = screen.getByTestId("details");
    fireEvent.click(detailsButton);

    const gnomeModal: HTMLElement = screen.getByText(/gnome details/i);
    const backdrop: HTMLElement = screen.getByTestId("backdrop");

    fireEvent.click(backdrop)

    expect(gnomeModal).not.toBeInTheDocument();
  });

  test("Close Modal - Button", () => {
    render(
      <Gnome
        id={0}
        gnomes={myGnomes}
        gnome={myGnome}
      />
    );

    const detailsButton: HTMLElement = screen.getByTestId("details");
    fireEvent.click(detailsButton);

    const gnomeModal: HTMLElement = screen.getByText(/gnome details/i);
    const closeButton: HTMLElement = screen.getByTestId("closeButton");

    fireEvent.click(closeButton)

    expect(gnomeModal).not.toBeInTheDocument();
  });
});

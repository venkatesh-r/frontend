import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Location from "../components/Location";

describe("Location component", () => {
  it("Heading loads", () => {
    render(<Location />);
    const heading = screen.getByText("Weather App");
    expect(heading).toBeInTheDocument();
  });

  it("Add city", () => {
    render(<Location />);
    const addCity = screen.getByRole("button", { name: "Add City" });
    const searchLocation = screen.getByTestId("searchInput");

    fireEvent.change(searchLocation, { target: { value: "berlin" } });
    fireEvent.click(searchLocation);
  });
});

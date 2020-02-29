import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { App, Navigation, PageLoading } from "./App";

describe("App", () => {
  it("renders title", () => {
    const { getByText } = render(<App />);

    const titleElement = getByText(/Simple Address Book/i);
    expect(titleElement).toBeInTheDocument();
  });
});

describe("Navigation", () => {
  it("renders home link", () => {
    const { getByText } = render(
      <Router>
        <Navigation />
      </Router>
    );

    const linkElement = getByText(/Home/i);
    expect(linkElement).toHaveAttribute("href", "/");
  });

  it("renders settings link", () => {
    const { getByText } = render(
      <Router>
        <Navigation />
      </Router>
    );

    const linkElement = getByText(/Settings/i);
    expect(linkElement).toHaveAttribute("href", "/settings");
  });
});

describe("PageLoading", () => {
  it("renders loading text", () => {
    const { getByText } = render(<PageLoading />);

    const linkElement = getByText(/Loading.../i);
    expect(linkElement).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom"
import NavBar from "../components/NavBar/NavBar";

describe("NavBar", () => {
  test("renders NavBar component with correct links", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    expect(screen.getByText("Početna")).toBeInTheDocument();
    expect(screen.getByText("O nama")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("AI Panel")).toBeInTheDocument();
    expect(screen.getByText("Kontakt")).toBeInTheDocument();
  });
});
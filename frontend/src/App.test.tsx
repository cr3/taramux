import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { services } from "./services";

describe("App", () => {
  it("renders the header with site title", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "taram.ca" })).toBeInTheDocument();
  });

  it("renders the header description", () => {
    render(<App />);
    expect(
      screen.getByText(/A portal to the services running under taram.ca/)
    ).toBeInTheDocument();
  });

  it("renders the services heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 2, name: "Services" })).toBeInTheDocument();
  });

  it("displays the correct services count", () => {
    render(<App />);
    expect(screen.getByText(`${services.length} online destinations`)).toBeInTheDocument();
  });

  it("renders a ServiceCard for each service", () => {
    render(<App />);
    expect(screen.getByText("Mail")).toBeInTheDocument();
    expect(screen.getByText(/Email for taram.ca/)).toBeInTheDocument();
    expect(screen.getByText("Wiki")).toBeInTheDocument();
    expect(screen.getByText(/Docs and knowledge base/)).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText(/Live service health/)).toBeInTheDocument();
  });

  it("renders the footer with current year", () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} taram.ca`)).toBeInTheDocument();
  });

  it("applies correct dark mode classes", () => {
    const { container } = render(<App />);
    const mainContainer = container.firstChild as HTMLElement;
    expect(mainContainer).toHaveClass("dark:bg-black");
    expect(mainContainer).toHaveClass("dark:text-zinc-100");
  });
});

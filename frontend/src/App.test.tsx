import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { services } from "./services";

vi.mock("./services", () => ({
  services: [
    {
      id: "test-1",
      name: "Test Service 1",
      description: "Test description 1",
      href: "https://test1.example.com",
      github: "https://github.com/test/repo1",
      tags: ["test"],
    },
    {
      id: "test-2",
      name: "Test Service 2",
      description: "Test description 2",
      href: "https://test2.example.com",
    },
  ],
}));

describe("App", () => {
  it("renders the header with site title", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "taram.ca" })).toBeInTheDocument();
  });

  it("renders the header description", () => {
    render(<App />);
    expect(
      screen.getByText(/A portal to the services running under taram.ca subdomains/)
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
    services.forEach((service) => {
      expect(screen.getByText(service.name)).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });

  it("renders the footer with current year", () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} taram.ca`)).toBeInTheDocument();
  });

  it("renders the GitHub link in footer", () => {
    render(<App />);
    const githubLinks = screen.getAllByRole("link", { name: "GitHub" });
    const footerGithubLink = githubLinks.find(
      (link) => link.getAttribute("href") === "https://github.com/YOUR_ORG"
    );
    expect(footerGithubLink).toBeInTheDocument();
    expect(footerGithubLink).toHaveAttribute("target", "_blank");
    expect(footerGithubLink).toHaveAttribute("rel", "noreferrer");
  });

  it("applies correct dark mode classes", () => {
    const { container } = render(<App />);
    const mainContainer = container.firstChild as HTMLElement;
    expect(mainContainer).toHaveClass("dark:bg-black");
    expect(mainContainer).toHaveClass("dark:text-zinc-100");
  });
});

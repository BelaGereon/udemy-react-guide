import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App.tsx";

describe("The App component", () => {
  it("renders the button correctly", () => {
    render(<App></App>);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("count is 0")).toBeInTheDocument();
  });
});

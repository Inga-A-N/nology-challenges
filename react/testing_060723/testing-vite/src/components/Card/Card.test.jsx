import { describe, expect } from "vitest";
import Card from "./Card";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Card component", () => {
  it("Sould render a heading and content", () => {
    render(
      <div>
        <p>Hello</p>
      </div>
    );
    const para = screen.getByText("Hello");
    expect(para).toBeInTheDocument();

    render(<Card />);

    const heading = screen.getByText(/heading/i);
    expect(heading).toBeInTheDocument();
    screen.debug();
  });
});

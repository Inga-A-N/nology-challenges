import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  it("Should render a title", () => {
    render(<Counter />);
    const title = screen.getByText(/count/i);
    expect(title).toBeInTheDocument();
  });
});

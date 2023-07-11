import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";
import { expect, vi } from "vitest";

describe("SearchBar", () => {
  it("Should call submit function that is passed into, when submit button is clicked", async () => {
    const myFunction = vi.fn(() => console.log("search happened")); //Mock function

    // () => {
    //   console.log("search happend");

    render(<SearchBar formSubmit={myFunction} />);

    const searchBtn = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(searchBtn);
    console.log(myFunction);
    expect(myFunction).toHaveBeenCalled();
  });

  it("should clear its value after search button clicks", async () => {
    const myFunction = (value) => console.log("Searched for " + value);
    render(<SearchBar formSubmit={myFunction} />);
    const searchBtn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/search/i);
    const user = userEvent.setup();
    await user.type(input, "hello");
    expect(input.value).toBe("hello");
    await user.click(searchBtn);
    expect(input.value).toBe("");
  });
});

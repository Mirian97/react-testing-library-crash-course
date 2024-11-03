import { render, screen } from "@testing-library/react";
import Input from ".";

describe("Input", () => {
  test("render input", () => {
    render(<Input name="input-test" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});

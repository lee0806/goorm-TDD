import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Button from "./components/Button";

describe("App", () => {
  it("버튼이 랜더링 되어야 한다.", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  it("버튼을 누르면 카운트가 올라가야 한다.", async () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("0");
    await userEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent("1");
  });
});

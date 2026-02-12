import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button 테스트", () => {
  it("버튼이 랜더링 되어야 한다", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  it("버튼을 누르면 onClick 이벤트가 발생해야 한다.", async () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent("1");
  });
});

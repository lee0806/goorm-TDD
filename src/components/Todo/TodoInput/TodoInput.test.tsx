import { render, screen } from "@testing-library/react";
import TodoInput from "./TodoInput";

describe("TodoInput 테스트", () => {
  it("TodoInput이 랜더링 되어야 한다", () => {
    render(<TodoInput />);
    const todoInputElement = screen.getByTestId("todo-input");
    expect(todoInputElement).toBeInTheDocument();
  });
});

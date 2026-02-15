import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList 테스트", () => {
  it("TodoList가 랜더링 되어야 한다", () => {
    render(<TodoList />);
    const todoListElement = screen.getByTestId("todo-list");
    expect(todoListElement).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import TodoContainer from "./TodoContainer";

describe("TodoContainer 테스트", () => {
  it("TodoContainer가 랜더링 되어야 한다", () => {
    render(<TodoContainer />);
    const headerElement = screen.getByTestId("todo-header");
    expect(headerElement).toBeInTheDocument();
  });
  it("TodoTopView가 랜더링 되어야 한다", () => {
    render(<TodoContainer />);
    const topViewElement = screen.getByTestId("todo-topview");
    expect(topViewElement).toBeInTheDocument();
  });
  it("TodoList가 랜더링 되어야 한다", () => {
    render(<TodoContainer />);
    const todoListElement = screen.getByTestId("todo-list");
    expect(todoListElement).toBeInTheDocument();
  });
  it("TodoInput이 랜더링 되어야 한다", () => {
    render(<TodoContainer />);
    const todoInputElement = screen.getByTestId("todo-input");
    expect(todoInputElement).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import userEvent from "@testing-library/user-event";
import { useTodoStore } from "../../../stores/useTodoStore";

describe("TodoList 테스트", () => {
  it("TodoList가 랜더링 되어야 한다", () => {
    render(<TodoList />);
    const todoListElement = screen.getByTestId("todo-list");
    expect(todoListElement).toBeInTheDocument();
    expect(screen.getByText("일정을 추가해주세요.")).toBeInTheDocument();
  });

  it("할일을 추가하면 TodoList에 나타나야 한다.", () => {
    const todo = useTodoStore.getState();
    todo.addTodo("테스트 할일");
    render(<TodoList />);
    expect(screen.getByText("테스트 할일")).toBeInTheDocument();
  });
  it("할일을 여러개 추가하면 모두 TodoList에 나타나야 한다.", () => {
    const todo = useTodoStore.getState();
    todo.addTodo("테스트 할일 1");
    todo.addTodo("테스트 할일 2");
    render(<TodoList />);
    expect(screen.getByText("테스트 할일 1")).toBeInTheDocument();
    expect(screen.getByText("테스트 할일 2")).toBeInTheDocument();
  });
  it("할일을 삭제하면 TodoList에서 사라져야 한다.", () => {
    const todo = useTodoStore.getState();

    todo.todos.forEach((element) => {
      todo.deleteTodo(element.id);
    });
    render(<TodoList />);
    expect(screen.getByText("일정을 추가해주세요.")).toBeInTheDocument();
  });
  it("체크박스를 클릭 시 완료 상태가 변경 되어야 한다.", async () => {
    const todo = useTodoStore.getState();
    todo.addTodo("테스트 할일");
    render(<TodoList />);
    const toggleButton = screen.getByRole("checkbox");
    expect(toggleButton).not.toBeChecked();
    await userEvent.click(toggleButton);
    expect(toggleButton).toBeChecked();
  });
});

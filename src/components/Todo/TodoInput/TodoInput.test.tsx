import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoInput from "./TodoInput";
import TodoList from "../TodoList/TodoList";
import { useTodoStore } from "../../../stores/useTodoStore";

describe("TodoInput 테스트", () => {
  // 랜더링 테스트
  it("TodoInput이 랜더링 되어야 한다", () => {
    render(<TodoInput />);
    const todoInputElement = screen.getByTestId("todo-input");
    expect(todoInputElement).toBeInTheDocument();
  });
  // 버튼 존재 여부 테스트
  it("TodoInput이 랜더링 되고 '+ 할일 추가하기' 텍스트가 보여야 한다", () => {
    render(<TodoInput />);
    expect(screen.getByText("+ 할일 추가하기")).toBeInTheDocument();
  });
  // 버튼 클릭 시 입력창과 추가, 취소 버튼 존재 여부 테스트
  it("TodoInput에서 버튼을 누르면 입력창과 추가, 취소 버튼이 보여야 한다.", async () => {
    render(<TodoInput />);
    const addBtn = screen.getByText("+ 할일 추가하기");
    await userEvent.click(addBtn);
    expect(
      screen.getByPlaceholderText("할일을 입력해주세요."),
    ).toBeInTheDocument();
    expect(screen.getByText("추가")).toBeInTheDocument();
    expect(screen.getByText("취소")).toBeInTheDocument();
  });
  // 입력 테스트
  it("입력창에 텍스트를 입력할 수 있어야 한다.", async () => {
    render(<TodoInput />);
    const addBtn = screen.getByText("+ 할일 추가하기");
    await userEvent.click(addBtn);
    const inputElement = screen.getByPlaceholderText("할일을 입력해주세요.");
    await userEvent.type(inputElement, "새로운 할일");
    expect(inputElement).toHaveValue("새로운 할일");
  });
  // 추가 버튼 클릭 시 store에 추가되는지 테스트
  it("추가 버튼을 누르면 store에 추가되어야 한다.", async () => {
    render(<TodoInput />);
    render(<TodoList />);
    const todoStore = useTodoStore.getState();
    const addBtn = screen.getByText("+ 할일 추가하기");
    await userEvent.click(addBtn);
    const inputElement = screen.getByPlaceholderText("할일을 입력해주세요.");
    await userEvent.type(inputElement, "새로운 할일");
    const submitBtn = screen.getByText("추가");
    await userEvent.click(submitBtn);
    expect(screen.getByText("새로운 할일")).toBeInTheDocument();

    // 테스트 후 초기화
    todoStore.todos.forEach((todo) => {
      todoStore.deleteTodo(todo.id);
    });
  });
});

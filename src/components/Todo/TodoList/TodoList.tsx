import React from "react";
import { useTodoStore } from "../../../stores/useTodoStore";
import "./TodoList.css";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos); // 할일 목록
  const deleteTodo = useTodoStore((state) => state.deleteTodo); // 할일 삭제
  const toggleTodo = useTodoStore((state) => state.toggleTodo); // 할일 상태 변경
  const filter = useTodoStore((state) => state.filter); // 필터 상태

  // 필터링된 할일 목록을 계산
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true; // 전체 목록
    if (filter === "progress") return !todo.completed; // 진행 중인 목록
    if (filter === "completed") return todo.completed; // 완료된 목록
    return true;
  });

  const handleToggleTodo = (id: number) => {
    toggleTodo(id);
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  return (
    <>
      <div data-testid="todo-list">
        {filteredTodos.length === 0 ? (
          <p className="todo-list-empty">일정을 추가해주세요.</p>
        ) : (
          <ul className="todo-list-ul">
            {filteredTodos.map((todo) => (
              <li key={todo.id} className="todo-list-li">
                <div
                  className={`todo-list-text ${
                    todo.completed ? "completed" : ""
                  }`}
                >
                  <input
                    onClick={() => handleToggleTodo(todo.id)}
                    className="todo-list-toggle-btn"
                    type="radio"
                    checked={todo.completed}
                  ></input>
                  {todo.text}
                </div>
                <button
                  className="todo-list-delete-btn"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

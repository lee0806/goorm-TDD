import React from "react";
import { useTodoStore } from "../../../stores/useTodoStore";
import "./TodoList.css";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos); // 할일 목록
  const deleteTodo = useTodoStore((state) => state.deleteTodo); // 할일 삭제
  const toggleTodo = useTodoStore((state) => state.toggleTodo); // 할일 상태 변경

  const handleToggleTodo = (id: number) => {
    toggleTodo(id);
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  return (
    <>
      <div data-testid="todo-list">
        {todos.length === 0 ? (
          <p className="todo-list-empty">일정을 추가해주세요.</p>
        ) : (
          <ul className="todo-list-ul">
            {todos.map((todo) => (
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

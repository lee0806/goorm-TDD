import React from "react";
import { useTodoStore } from "../../../stores/useTodoStore";
import "./TodoList.css";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  return (
    <>
      <div data-testid="todo-list">
        {todos.length === 0 ? (
          <p className="todo-list-empty">할 일이 없습니다.</p>
        ) : (
          <ul className="todo-list-ul">
            {todos.map((todo) => (
              <li key={todo.id} className="todo-list-li">
                <span
                  className={`todo-list-text ${
                    todo.completed ? "completed" : ""
                  }`}
                >
                  {todo.text}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

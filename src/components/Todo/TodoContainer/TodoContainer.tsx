import React from "react";
import "./TodoContainer.css";
import TodoTopView from "../TodoTopView/TodoTopView";
import TodoInput from "../TodoInput/TodoInput";

export default function TodoContainer() {
  return (
    <>
      <div className="todo-container">
        <header data-testid="todo-header">
          <h3>뭐했어야 했지?</h3>
        </header>
        <main className="todo-container-main">
          <TodoTopView />
          <TodoInput />
        </main>
      </div>
    </>
  );
}

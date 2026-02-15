import React from "react";
import "./TodoContainer.css";
import TodoSideBar from "../TodoSideBar/TodoTopView";

export default function TodoContainer() {
  return (
    <>
      <div className="todo-container">
        <header data-testid="todo-header">
          <h3>뭐했어야 했지?</h3>
          <p className="todo-header-describe">
            내가 해야 할일을 까먹지 않고 바로 확인해보세요!
          </p>
        </header>
        <main className="todo-container-main">
          <TodoSideBar />
        </main>
      </div>
    </>
  );
}

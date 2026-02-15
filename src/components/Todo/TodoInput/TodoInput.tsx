import React from "react";
import "./TodoInput.css";

export default function TodoInput() {
  return (
    <>
      <div data-testid="todo-input" className="todo-input-container">
        <button className="todo-input-button">+ 할일 추가하기</button>
      </div>
    </>
  );
}

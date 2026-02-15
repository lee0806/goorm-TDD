import React from "react";
import { useState } from "react";
import { useTodoStore } from "../../../stores/useTodoStore";
import "./TodoInput.css";

export default function TodoInput() {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
      setInputVisible(false);
    }
  };
  return (
    <>
      <div data-testid="todo-input" className="todo-input-container">
        {!inputVisible ? (
          <button
            className="todo-input-button"
            onClick={() => setInputVisible(true)}
          >
            + 할일 추가하기
          </button>
        ) : (
          <>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>추가</button>
            <button onClick={() => setInputVisible(false)}>취소</button>
          </>
        )}
      </div>
    </>
  );
}

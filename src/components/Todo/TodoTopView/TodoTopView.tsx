import React from "react";
import { useState } from "react";
import "./TodoTopView.css";

export default function TodoTopView() {
  const [selectedButton, setSelectedButton] = useState("all");
  return (
    <>
      <div data-testid="todo-topview" className="topview-list">
        <button
          className={`topview-button-all ${selectedButton === "all" ? "active" : ""}`}
          onClick={() => setSelectedButton("all")}
        >
          전체 보기
        </button>
        <button
          className={`topview-button-progress ${selectedButton === "progress" ? "active" : ""}`}
          onClick={() => setSelectedButton("progress")}
        >
          진행 중
        </button>
        <button
          className={`topview-button-complete ${selectedButton === "complete" ? "active" : ""}`}
          onClick={() => setSelectedButton("complete")}
        >
          완료됨
        </button>
      </div>
    </>
  );
}

import React from "react";
import "./TodoTopView.css";
import { useTodoStore } from "../../../stores/useTodoStore";

export default function TodoTopView() {
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);

  return (
    <>
      <div data-testid="todo-topview" className="topview-list">
        <button
          className={`topview-button-all ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          전체 보기
        </button>
        <button
          className={`topview-button-progress ${filter === "progress" ? "active" : ""}`}
          onClick={() => setFilter("progress")}
        >
          진행 중
        </button>
        <button
          className={`topview-button-complete ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          완료됨
        </button>
      </div>
    </>
  );
}

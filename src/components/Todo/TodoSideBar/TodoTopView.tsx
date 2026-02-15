import React from "react";
import "./TodoTopView.css";

export default function TodoTopView() {
  return (
    <>
      <div data-testid="todo-topview" className="topview-list">
        <button>전체 보기</button>
        <button>진행 중</button>
        <button>완료됨</button>
      </div>
    </>
  );
}

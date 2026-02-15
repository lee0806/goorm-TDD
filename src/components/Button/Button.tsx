import React from "react";
import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="button"
      >
        실제 값의 변화를 나타냅니다. {count}
      </button>
    </>
  );
}

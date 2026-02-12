import React from "react";
import Children from "../Children/Children";
import { useState } from "react";

export default function Parent() {
  const userInfo = [
    {
      name: "김철수",
      age: 20,
      email: "example@example.com",
    },
    {
      name: "이영희",
      age: 25,
      email: "example2@example.com",
    },
  ];

  const [users, setUsers] = useState(0);

  return (
    <>
      <div data-testid="parent">
        <button onClick={() => setUsers((users + 1) % 2)}>다음 유저</button>
        <Children
          name={userInfo[users].name}
          age={userInfo[users].age}
          email={userInfo[users].email}
        />
      </div>
    </>
  );
}

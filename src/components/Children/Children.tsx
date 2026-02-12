import React from "react";

export default function Children({
  name,
  age,
  email,
}: {
  name: string;
  age: number;
  email: string;
}) {
  return (
    <>
      <div data-testid="children">
        <div>이름: {name}</div>
        <div>나이: {age}</div>
        <div>이메일: {email}</div>
      </div>
    </>
  );
}

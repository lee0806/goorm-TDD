import React from "react";
import styled from "styled-components";

export default function StyledComponentsButton() {
  const 버튼 = styled.button`
    border: none;
    background-color: #4caf50;
    border-radius: 20px;
    color: white;
    font-size: 24px;
    font-weight: bold;
    box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
    transition: ease-in-out 0.3s;
    padding: 14px 20px;
    &:hover {
      background-color: #45a049;
      cursor: pointer;
      transition: ease-in-out 0.3s;
    }
    &:active {
      background-color: #3e8e41;
      box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.2);
      transition: ease-in-out 0.3s;
    }
  `;

  return (
    <>
      <버튼>styled 버튼입니다.</버튼>
    </>
  );
}

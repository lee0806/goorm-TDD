import React from "react";
import "./OrderProductSearchBar.css";
import { useSearchStore } from "../../../stores/useSearchStore";

export default function OrderProductSearchBar() {
  const { searchValue, setSearchValue } = useSearchStore();

  return (
    <>
      <div className="">
        <div className="order-product-search-container">
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            className="order-product-search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="order-product-search-click" aria-label="검색 버튼">
            <svg
              aria-label="검색"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="16.511"
                x2="22"
                y1="16.511"
                y2="22"
              ></line>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

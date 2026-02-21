import React from "react";
import "./OrderProductTitle.css";

export default function OrderProductTitle() {
  return (
    <>
      <div className="order-product-title-container">
        <div className="order-product-title-title">뭘 먹을래?</div>
        <div className="order-product-title-subtitle">
          오늘은 어떤 메뉴를 드실건가요?
        </div>
      </div>
    </>
  );
}

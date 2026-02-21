import React from "react";
import "./OrderProductList.css";
import { food } from "../Food/Food";
import { useCartStore } from "../../stores/useCartStore";

export default function OrderProductList() {
  const 
  return (
    <>
      <div className="order-product-list">
        <h2 className="order-product-list-title">메뉴</h2>
        {food.map((item) => (
          <div key={item.id} className="order-product-list-item">
            <img
              src={item.img}
              alt={item.name}
              className="order-product-list-image"
            />
            <div className="order-product-info">
              <div className="order-product-list-item-title">{item.name}</div>
              <div>{item.category}</div>
              <div>{item.price.toLocaleString()}원</div>
            </div>
            <div className="order-product-count">
              <div>-</div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import React from "react";
import "./OrderProductList.css";
import { food } from "../Food/Food";
import { useCartStore } from "../../../stores/useCartStore";
import { useSearchStore } from "../../../stores/useSearchStore";

export default function OrderProductList() {
  const addItem = useCartStore((state) => state.addItem); // 상품 갯수 추가
  const minusItem = useCartStore((state) => state.minusItem); // 상품 갯수 빼기
  const cart = useCartStore((state) => state.cart); // 상품 자체
  const searchValue = useSearchStore((state) => state.searchValue);
  return (
    <>
      <div className="order-product-list">
        <h2 className="order-product-list-title">메뉴</h2>
        {searchValue === ""
          ? food.map((item) => (
              <div key={item.id} className="order-product-list-item">
                <img
                  src={item.img}
                  alt={item.name}
                  className="order-product-list-image"
                />
                <div className="order-product-info">
                  <div className="order-product-list-item-title">
                    {item.name}
                  </div>
                  <div>{item.category}</div>
                  <div>{item.price.toLocaleString()}원</div>
                </div>
                <div className="order-product-count-counter">
                  <div onClick={() => minusItem(item.id)}>-</div>
                  <div>{cart[item.id] || 0}</div>
                  <div onClick={() => addItem(item.id)}>+</div>
                </div>
              </div>
            ))
          : food
              .filter((item) => item.name.includes(searchValue))
              .map((item) => (
                <div key={item.id} className="order-product-list-item">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="order-product-list-image"
                  />
                  <div className="order-product-info">
                    <div className="order-product-list-item-title">
                      {item.name}
                    </div>
                    <div>{item.category}</div>
                    <div>{item.price.toLocaleString()}원</div>
                  </div>
                  <div className="order-product-count-counter">
                    <div onClick={() => minusItem(item.id)}>-</div>
                    <div>{cart[item.id] || 0}</div>
                    <div onClick={() => addItem(item.id)}>+</div>
                  </div>
                </div>
              ))}
      </div>
    </>
  );
}

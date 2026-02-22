import React from "react";
import { useState } from "react";
import "./OrderProductFB.css";
import { useCartStore } from "../../../stores/useCartStore";
import { food } from "../Food/Food";

export default function OrderProductFB() {
  const cartStore = useCartStore();
  const [click, setClick] = useState(true);
  const cartItem = Object.entries(cartStore.cart);
  const totalPrice = cartStore.getTotalPrice();
  return (
    <>
      <div className="order-product-fb-container">
        {click ? (
          <button
            className="order-product-fb-content"
            onClick={() => setClick(!click)}
            aria-label="장바구니 버튼"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        ) : (
          <div className="order-product-fb-modal">
            <div className="order-product-fb-modal-content">
              <div className="order-product-fb-modal-cancel">
                <button onClick={() => setClick(!click)}>X</button>
              </div>
              <div>
                {cartItem.length === 0 ? (
                  <div className="order-product-fb-modal-empty">
                    장바구니가 비어있습니다.
                  </div>
                ) : (
                  <>
                    {cartItem.map(([key, item]) => {
                      const foodItem = food.find(
                        (food) => food.id === Number(key),
                      );

                      return (
                        <>
                          <div className="order-product-fb-modal-item">
                            <span>
                              {foodItem ? foodItem.name : "없는 메뉴입니다."}
                            </span>
                            <span>{item}개</span>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
              </div>
              <div className="order-product-fb-modal-total">
                <span>총 금액</span>
                <span>{totalPrice.toLocaleString()}원</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

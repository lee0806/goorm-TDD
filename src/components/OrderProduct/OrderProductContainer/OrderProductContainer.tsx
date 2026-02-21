import React from "react";
import "./OrderProductContainer.css";
import OrderProductTitle from "../OrderProductTitle/OrderProductTitle";
import OrderProductSearchBar from "../OrderProductSearchBar/OrderProductSearchBar";
import OrderProductList from "../OrderProductList/OrderProductList";

export default function OrderProductContainer() {
  return (
    <>
      <section
        aria-label="order-product-container"
        className="order-product-container"
      >
        <OrderProductTitle />
      </section>
      <section aria-label="order-product-list">
        <OrderProductSearchBar />
        <OrderProductList />
      </section>
    </>
  );
}

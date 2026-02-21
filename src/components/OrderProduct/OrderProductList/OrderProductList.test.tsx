import { render, screen } from "@testing-library/react";
import OrderProductList from "./OrderProductList";

describe("OrderProductList 테스트", () => {
  it("OrderProductList가 렌더링 되어야 한다.", () => {
    render(<OrderProductList />);
    const orderProductListElement = screen.getByText("메뉴");
    expect(orderProductListElement).toBeInTheDocument();
  });
});

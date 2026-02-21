import { render, screen } from "@testing-library/react";
import OrderProductList from "./OrderProductList";
import userEvent from "@testing-library/user-event";
import { food } from "../Food/Food";
import type { Food } from "../Food/Food";

describe("OrderProductList 테스트", () => {
  it("OrderProductList가 렌더링 되어야 한다.", () => {
    render(<OrderProductList />);
    const orderProductListElement = screen.getByText("메뉴");
    expect(orderProductListElement).toBeInTheDocument();
  });
  it("OrderProductList의 상품이 렌더링 되어야 한다.", () => {
    render(<OrderProductList />);
    food.forEach((item: Food) => {
      const orderProductListElement = screen.getByText(item.name);
      expect(orderProductListElement).toBeInTheDocument();
    });
  });
});

describe("OrderProductList 이벤트 테스트", () => {
  it("OrderProductList의 +, - 버튼이 랜더링 되어야 한다.", () => {
    render(<OrderProductList />);
    const plusButton = screen.getAllByText("+");
    const minusButton = screen.getAllByText("-");
    expect(plusButton).toHaveLength(food.length);
    expect(minusButton).toHaveLength(food.length);
  });
  it("OrderProductList의 + 버튼을 누르면 상품 숫자가 1씩 증가해야 한다.", async () => {
    render(<OrderProductList />);
    const plusButton = screen.getAllByText("+");
    const countElement = screen.getAllByText("0");

    for (let i = 0; i < plusButton.length; i++) {
      await userEvent.click(plusButton[i]);
      expect(countElement[i]).toHaveTextContent("1");
    }
  });
});

import { render, screen } from "@testing-library/react";
import OrderProductContainer from "./OrderProductContainer";

describe("OrderProductContainer 테스트", () => {
  it("OrderProductContainer가 렌더링 되어야 한다.", () => {
    render(<OrderProductContainer />);
    const orderProductContainerElement = screen.getByRole("region", {
      name: "order-product-container",
    });
    expect(orderProductContainerElement).toBeInTheDocument();
  });
  it("OrderProductTitle이 ORderProductContainer 안에 렌더링 되어야 한다", () => {
    render(<OrderProductContainer />);
    const orderProductTitleElement = screen.getByText("뭘 먹을래?");
    expect(orderProductTitleElement).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import OrderProductContainer from "./OrderProductContainer";

describe("OrderProductContainer 테스트", () => {
  it("OrderProductContainer가 렌더링 되어야 한다.", () => {
    render(<OrderProductContainer />);
    const orderProductContainerElement = screen.getByText(
      "OrderProductContainer",
    );
    expect(orderProductContainerElement).toBeInTheDocument();
  });
});

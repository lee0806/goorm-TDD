import { render, screen } from "@testing-library/react";
import OrderProductTitle from "./OrderProductTitle";

describe("OrderProductTitle 테스트", () => {
  it("OrderProductTitle이 렌더링 되어야 한다", () => {
    render(<OrderProductTitle />);
    const orderProductTitleElement = screen.getByText("뭘 먹을래?");
    expect(orderProductTitleElement).toBeInTheDocument();
  });
});

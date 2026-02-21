import { render, screen } from "@testing-library/react";
import OrderProductSearchBar from "./OrderProductSearchBar";

describe("OrderProductSearchBar 테스트", () => {
  it("OrderProductSearchBar가 렌더링 되어야 한다.", () => {
    render(<OrderProductSearchBar />);
    const orderProductSearchBarElement = screen.getByText(
      "OrderProductSearchBar",
    );
    expect(orderProductSearchBarElement).toBeInTheDocument();
  });
});

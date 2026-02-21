import { render, screen } from "@testing-library/react";
import OrderProductSearchBar from "./OrderProductSearchBar";

describe("OrderProductSearchBar 테스트", () => {
  it("input과 버튼이 렌더링 되어야 한다", () => {
    render(<OrderProductSearchBar />);
    const inputElement = screen.getByPlaceholderText("검색어를 입력해주세요.");
    const buttonElement = screen.getByRole("button", { name: "검색 버튼" });
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});

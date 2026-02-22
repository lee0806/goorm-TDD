import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrderProductContainer from "./OrderProductContainer";

describe("OrderProductContainer 테스트", () => {
  it("OrderProductContainer가 렌더링 되어야 한다.", () => {
    // 전체 렌더링 테스트
    render(<OrderProductContainer />);
    const orderProductContainerElement = screen.getByRole("region", {
      name: "order-product-container",
    });
    expect(orderProductContainerElement).toBeInTheDocument();
  });
  it("OrderProductTitle이 ORderProductContainer 안에 렌더링 되어야 한다", () => {
    // 타이틀 렌더링 테스트
    render(<OrderProductContainer />);
    const orderProductTitleElement = screen.getByText("뭘 먹을래?");
    expect(orderProductTitleElement).toBeInTheDocument();
  });
  it("OrderProductSearchBar가 ORderProductContainer 안에 렌더링 되어야 한다", () => {
    // 검색 바 렌더링 테스트
    render(<OrderProductContainer />);
    const orderProductSearchBarElement =
      screen.getByPlaceholderText("검색어를 입력해주세요.");
    expect(orderProductSearchBarElement).toBeInTheDocument();
  });
  it("OrderProductList가 ORderProductContainer 안에 렌더링 되어야 한다", () => {
    // 상품 리스트 렌더링 테스트
    render(<OrderProductContainer />);
    const orderProductListElement = screen.getByText("메뉴");
    expect(orderProductListElement).toBeInTheDocument();
  });
});

describe("OrderProductList 검색 테스트", () => {
  it("OrderProductList의 검색창이 랜더링 되어야 한다.", () => {
    // 검색창 렌더링 테스트
    render(<OrderProductContainer />);
    const searchInput = screen.getByPlaceholderText("검색어를 입력해주세요.");
    expect(searchInput).toBeInTheDocument();
  });
  it("OrderProductList의 검색창에 검색어를 입력하면 해당 검색어가 포함된 상품만 렌더링 되어야 한다.", async () => {
    // 검색 기능 테스트
    render(<OrderProductContainer />);
    const searchInput = screen.getByPlaceholderText("검색어를 입력해주세요.");
    await userEvent.type(searchInput, "삼겹살");
    const gogiItem = screen.getByText("삼겹살");
    expect(gogiItem).toBeInTheDocument();
  });
});

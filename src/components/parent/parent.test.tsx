import { render, screen } from "@testing-library/react";
import Parent from "./Parent";
import userEvent from "@testing-library/user-event";

describe("parent 테스트", () => {
  it("parent가 랜더링 되어야 한다", () => {
    // 부모 컴포넌트 랜더링 테스트
    render(<Parent />);
    const parentElement = screen.getByTestId("parent");
    expect(parentElement).toBeInTheDocument();
  });
  it("parent에서 자식 컴포넌트가 랜더링 되어야 한다.", () => {
    // Children 컴포넌트 랜더링 테스트
    render(<Parent />);
    const childrenElement = screen.getByTestId("children");
    expect(childrenElement).toBeInTheDocument();
  });
  it("parent에서 자식 컴포넌트에 props가 전달되어야 한다.", () => {
    // Children 컴포넌트에서 props를 받아 랜더링 되는지 테스트
    render(<Parent />);
    const childrenElement = screen.getByTestId("children");
    expect(childrenElement).toHaveTextContent("이름: 김철수");
    expect(childrenElement).toHaveTextContent("나이: 20");
    expect(childrenElement).toHaveTextContent("이메일: example@example.com");
  });
  it("parent에서 버튼이 랜더링 되어야 한다", () => {
    // 버튼 랜더링 테스트
    render(<Parent />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  it("parent에서 버튼이 클릭되었을 때 상태가 변경되어야 한다.", async () => {
    // 버튼 클릭 시 props가 변경되서 Children 컴포넌트에 반영되는지 테스트
    render(<Parent />);
    const ChildrenElement = screen.getByTestId("children"); // children 요소를 찾음
    // 초기값 테스트
    expect(ChildrenElement).toHaveTextContent("이름: 김철수");
    expect(ChildrenElement).toHaveTextContent("나이: 20");
    expect(ChildrenElement).toHaveTextContent("이메일: example@example.com");
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement); // 버튼 이벤트 발생
    // 버튼 클릭 후 변경된 값 테스트
    expect(ChildrenElement).toHaveTextContent("이름: 이영희");
    expect(ChildrenElement).toHaveTextContent("나이: 25");
    expect(ChildrenElement).toHaveTextContent("이메일: example2@example.com");
  });
});

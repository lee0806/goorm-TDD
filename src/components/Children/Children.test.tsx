import { render, screen } from "@testing-library/react";
import Children from "./Children";

describe("Children 테스트", () => {
  it("Children이 랜더링 되어야 한다", () => {
    render(<Children name="testName" age={10} email="example@example.com" />); // Children 랜더링 테스트
    const childrenElement = screen.getByTestId("children"); // children 요소를 찾음
    expect(childrenElement).toBeInTheDocument(); // children이 존재하는지 테스트
  });
  it("Children 컴포넌트에 props가 전달되어야 한다", () => {
    const mockProps = {
      // 임시 값 설정
      name: "testName",
      age: 10,
      email: "example@example.com",
    };
    render(<Children {...mockProps} />); // Children 컴포넌트에 props를 전달
    const childrenElement = screen.getByTestId("children");
    // props가 제대로 전달되었는지 테스트
    expect(childrenElement).toBeInTheDocument();
    expect(childrenElement).toHaveTextContent("testName");
    expect(childrenElement).toHaveTextContent("10");
    expect(childrenElement).toHaveTextContent("example@example.com");
  });
});

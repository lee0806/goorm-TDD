import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button 테스트", () => {
  it("버튼이 랜더링 되어야 한다", () => {
    // 버튼 랜더링 테스트
    render(<Button />);
    const buttonElement = screen.getByRole("button"); // 버튼 요소를 찾음
    expect(buttonElement).toBeInTheDocument(); // 버튼이 존재하는지 테스트
  });
  it("버튼을 누르면 onClick 이벤트가 발생해야 한다.", async () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button"); // 버튼 요소를 찾음
    await userEvent.click(buttonElement); // 버튼 클릭 이벤트가 발생했을 때
    expect(buttonElement).toHaveTextContent("1"); // 버튼의 텍스트가 1로 바뀌는지 테스트
  });
  it("5번 버튼을 누르면 5가 출력되는 이벤트가 발생해야 합니다.", async () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button"); // 버튼 요소를 찾음
    for (let i = 1; i <= 5; i++) {
      await userEvent.click(buttonElement); // 5번 버튼 클릭 이벤트가 발생했을 때
    }
    expect(buttonElement).toHaveTextContent("5"); // 버튼의 텍스트가 5로 바뀌는지 테스트
  });
});

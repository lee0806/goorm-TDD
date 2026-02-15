import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoTopView from "./TodoTopView";

describe("TodoTopView 테스트", () => {
  it("TodoTopView가 랜더링 되어야 한다", () => {
    render(<TodoTopView />);
    const topViewElement = screen.getByTestId("todo-topview");
    expect(topViewElement).toBeInTheDocument();
  });
  it("TodoTopView에 버튼을 누르면 onClick이 실행되어야 한다", async () => {
    render(<TodoTopView />);

    // 버튼 요소 가져오기
    const allButton = screen.getByText("전체 보기");
    const progressButton = screen.getByText("진행 중");
    const completeButton = screen.getByText("완료됨");

    // 초기 상태
    expect(allButton).toHaveClass("active"); // 전체 보기 버튼이 활성화 되어야 함
    expect(progressButton).not.toHaveClass("active"); // 진행중 버튼이 비활성화 되어야 함
    expect(completeButton).not.toHaveClass("active"); // 완료됨 버튼이 비활성화 되어야 함

    // 전체 보기 버튼 클릭
    await userEvent.click(allButton); // 전체 보기 버튼을 클릭했을 때
    expect(allButton).toHaveClass("active"); // 전체 보기 버튼이 활성화 되어야 함
    expect(progressButton).not.toHaveClass("active"); // 진행중 버튼이 비활성화 되어야 함
    expect(completeButton).not.toHaveClass("active"); // 완료됨 버튼이 비활성화 되어야 함

    // 진행 중 버튼 클릭
    await userEvent.click(progressButton);
    expect(allButton).not.toHaveClass("active"); // 전체 보기 버튼이 비활성화 되어야 함
    expect(progressButton).toHaveClass("active"); // 진행중 버튼이 활성화 되어야 함
    expect(completeButton).not.toHaveClass("active"); // 완료됨 버튼이 비활성화 되어야 함

    // 완료됨 버튼 클릭
    await userEvent.click(completeButton);
    expect(allButton).not.toHaveClass("active"); // 전체 보기 버튼이 비활성화 되어야 함
    expect(progressButton).not.toHaveClass("active"); // 진행중 버튼이 비활성화 되어야 함
    expect(completeButton).toHaveClass("active"); // 완료됨 버튼이 활성화 되어야 함
  });
});

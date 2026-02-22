import { render, screen } from "@testing-library/react";
import OrderProductFB from "./OrderPRoductFB";
import userEvent from "@testing-library/user-event";

describe("floating button 테스트", () => {
  it("floating button이 랜더링 되어야 한다.", () => {
    render(<OrderProductFB />);
    const button = screen.getByRole("button", { name: "장바구니 버튼" });
    expect(button).toBeInTheDocument();
  });
  it("장바구니를 누르면 모달이 열려야 한다.", async () => {
    render(<OrderProductFB />);
    const button = screen.getByRole("button", { name: "장바구니 버튼" });
    await userEvent.click(button);
    const modal = screen.getByText("장바구니가 비어있습니다.");
    expect(modal).toBeInTheDocument();
  });
  it("모달에서 X버튼을 누르면 모달이 닫혀야 한다.", async () => {
    render(<OrderProductFB />);
    const button = screen.getByRole("button", { name: "장바구니 버튼" });
    await userEvent.click(button);
    const cancelButton = screen.getByRole("button", { name: "X" });
    await userEvent.click(cancelButton);
    const modal = screen.queryByText("장바구니가 비어있습니다.");
    expect(modal).not.toBeInTheDocument();
  });
});

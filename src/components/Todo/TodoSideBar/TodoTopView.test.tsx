import { render, screen } from "@testing-library/react";
import TodoTopView from "./TodoTopView";

describe("TodoTopView 테스트", () => {
  it("TodoTopView가 랜더링 되어야 한다", () => {
    render(<TodoTopView />);
    const topViewElement = screen.getByTestId("todo-topview");
    expect(topViewElement).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import App from "./App";

test("the counters starts at 0", () => {
  // App 컴포넌트를 render 함.
  render(<App />);
  // screen object를 이용해서 원하는 Element 접근(접근할 때 id로 접근)
  const counterElement = screen.getByTestId("counter");
  // id가 counter인 Element 텍스트가 0인지 테스트
  // expect(counterElement).toBe(0); // error
  expect(counterElement).toHaveTextContent(0);
});

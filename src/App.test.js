/**
 * fireEvent - 유저가 발생시키는 액션(이벤트)에 대한 테스트를 해야 하는 경우 사용.
 * (https://testing-library.com/docs/dom-testing-library/api-events)
 */
import { fireEvent, render, screen } from "@testing-library/react";
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

test("minus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

test("when the plus button is pressed, the counter changes to 1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  // click plus-button
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("when the minus button is pressed, the counter changes to -1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  // click minus-button
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

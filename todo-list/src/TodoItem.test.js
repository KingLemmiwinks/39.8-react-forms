import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

it("renders without crashing", () => {
  render(<TodoItem />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoItem />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs the complete function on button click", () => {
  const completeMock = jest.fn();
  const { getByText } = render(<TodoItem completeTodo={completeMock} />);
  const completeButton = getByText("Mark Complete");
  fireEvent.click(completeButton);
  expect(completeMock).toHaveBeenCalled();
});

it("runs the delete function on button click", function () {
  const deleteMock = jest.fn();
  const { getByText } = render(<TodoItem deleteTodo={deleteMock} />);
  const deleteButton = getByText("Remove X");
  fireEvent.click(deleteButton);
  expect(deleteMock).toHaveBeenCalled();
});

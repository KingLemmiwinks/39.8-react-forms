import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, todo = "walk nova") {
  const taskInput = todoList.getByLabelText("What needs doin'?");
  fireEvent.change(taskInput, { target: { value: todo } });
  const submitButton = todoList.getByText("Add Todo");
  fireEvent.click(submitButton);
}

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", function () {
  const list = render(<TodoList />);
  addTodo(list);

  expect(list.getByLabelText("What needs doin'?")).toHaveValue("");
  expect(list.getByText("walk nova")).toBeInTheDocument();
  expect(list.getByText("Mark Complete")).toBeInTheDocument();
  expect(list.getByText("Remove X")).toBeInTheDocument();
});

it("can delete a todo", function () {
  const list = render(<TodoList />);
  addTodo(list);

  fireEvent.click(list.getByText("Remove X"));

  expect(list.queryByText("walk nova")).not.toBeInTheDocument();
});

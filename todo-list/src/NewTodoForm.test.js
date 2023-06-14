import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", () => {
  render(
    <NewTodoForm
      formData={{
        todo: "",
        isComplete: false,
      }}
    />
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <NewTodoForm
      formData={{
        todo: "",
        isComplete: false,
      }}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("runs the create function on form submit", function () {
  const submitMock = jest.fn();
  const { getByText } = render(
    <NewTodoForm
      formData={{
        todo: "",
        isComplete: false,
      }}
      submitHandler={submitMock}
    />
  );
  const submitButton = getByText("Add Todo");
  fireEvent.click(submitButton);
  expect(submitMock).toHaveBeenCalled();
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

describe("NewBoxForm Component", () => {
  const mockChangeHandler = jest.fn();
  const mockSubmitHandler = jest.fn();
  const intialFormValue = {
    width: "",
    height: "",
    boxBackgroundColor: "",
  };
  const changedFormData = { ...intialFormValue, width: "100" };

  it("renders form without crashing", () => {
    render(
      <NewBoxForm
        formData={intialFormValue}
        changeHandler={mockChangeHandler}
        submitHandler={mockSubmitHandler}
      />
    );
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <NewBoxForm
        formData={intialFormValue}
        changeHandler={mockChangeHandler}
        submitHandler={mockSubmitHandler}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("tests form operation", () => {
    const { getByLabelText, rerender, queryByText } = render(
      <NewBoxForm
        formData={intialFormValue}
        changeHandler={mockChangeHandler}
        submitHandler={mockSubmitHandler}
      />
    );

    const widthInput = getByLabelText("Box Width (in pixels):");
    const heightInput = getByLabelText("Box Height (in pixels):");
    const boxBackgroundColorInput = getByLabelText(
      "Box Background Color(hex code or valid css color name):"
    );
    const addBoxBtn = queryByText("Create Box");

    expect(widthInput.value).toBe("");
    expect(heightInput.value).toBe("");
    expect(boxBackgroundColorInput.value).toBe("");

    fireEvent.change(widthInput, { target: { value: "100" } });

    rerender(
      <NewBoxForm
        formData={changedFormData}
        changeHandler={mockChangeHandler}
        submitHandler={mockSubmitHandler}
      />
    );

    expect(mockChangeHandler).toBeCalledTimes(1);
    expect(widthInput.value).toBe("100");

    fireEvent.click(addBoxBtn);

    expect(mockSubmitHandler).toBeCalledTimes(1);
  });
});

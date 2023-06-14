import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "200", width = "200", color = "teal") {
  const widthInput = boxList.getByLabelText("Box Width (in pixels):");
  const heightInput = boxList.getByLabelText("Box Height (in pixels):");
  const boxBackgroundColorInput = boxList.getByLabelText(
    "Box Background Color(hex code or valid css color name):"
  );
  const addBoxBtn = boxList.queryByText("Create Box");
  fireEvent.change(boxBackgroundColorInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });

  fireEvent.click(addBoxBtn);
}

it("renders BoxList without crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function () {
  const boxList = render(<BoxList />);

  // No boxes created
  expect(boxList.queryByText("Remove X")).not.toBeInTheDocument();

  addBox(boxList);

  // expect to see a box
  const removeButton = boxList.getByText("Remove X");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.parentElement).toHaveStyle(`
    width: 200px;
    height: 200px;
    background-color: teal;
  `);
  // expect form to be empty
  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

it("can remove a box", function () {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const removeButton = boxList.getByText("Remove X");

  // click the remove button and the box should be gone
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});

import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("renders Box component without crashing", () => {
  render(<Box />);
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <Box idx="1" width="200" height="200" boxBackgroundColor="teal" />
  );
  expect(asFragment()).toMatchSnapshot();
});

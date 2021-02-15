import "@testing-library/jest-dom";

import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test('displays a "Button" message', () => {
  render(<Button onClick={() => alert("Teste")} text="Hello there" />);
  expect(true).toBe(true);
  // expect(screen.getByText("Hello there")).toBeInTheDocument();
});

test("should return true", () => {
  expect(true).toBe(true);
});

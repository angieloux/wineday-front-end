import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders react component", () => {
  render(<App />);
  const divElement = screen.getByText(/because/i);
  expect(divElement).toBeInTheDocument();
});

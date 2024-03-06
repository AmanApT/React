import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test Case", () => {
  // we use describe for grouping our similar tests

  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button in Contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    // This button is a React Element

    expect(button).toBeInTheDocument();
  });

  test("Should load two input boxes in Contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});

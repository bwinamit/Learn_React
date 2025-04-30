import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

describe("Contact Us Component", () => {
  test("should load contact us component", () => {
    //Render
    render(<Contact />);
    //Querying
    const heading = screen.getByRole("heading", { name: /contact us/i });
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  
  it("should load contact us component with correct text", () => {
    //Render
    render(<Contact />);
    //Querying
    const text = screen.getByText(/we would love to hear from you/i);
    //Assertion
    expect(text).toBeInTheDocument();
  })
})


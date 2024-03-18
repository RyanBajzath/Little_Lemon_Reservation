import { fireEvent, render, screen } from "@testing-library/react";
import UnitTesting from "./UnitTesting";

// Use test with a string and a function
test("Testing the adding button from UnitTesting", () => {

    // Render the component
    render(<UnitTesting />);

    // Get the elements to test with the screen
    const headerElement = screen.getByTestId("currentNumber");
    const buttonAdd = screen.getByTestId("add-one");

    // Test a button click
    fireEvent.click(buttonAdd);

    // Check the expected results
    // Ensure you're checking the textContent of the headerElement
    expect(headerElement.textContent).toBe("2");
});

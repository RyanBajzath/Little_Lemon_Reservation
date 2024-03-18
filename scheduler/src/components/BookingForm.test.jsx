import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Define mockProps in a scope accessible by all tests if they share the same props
const mockProps = {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    form: { reservationDate: '', numGuest: '', occasion: '' },

    dispatcher: jest.fn(),
};

test("testing booking form's reserve hours", () => {
    // Render BookingForm with the mockProps
    render(<BookingForm {...mockProps} />);

    // Grab the select element for reservation times
    const reserveHourSelect = screen.getByLabelText(/Reserve hour/);

    // Grab all the option elements within the select
    const options = Array.from(reserveHourSelect.children);

    // Check each option value matches the expected available time
    options.forEach((option, index) => {
        expect(option.value).toBe(mockProps.availableTimes[index]);
    });
});

test("Testing the updater function", () => {


    // Render BookingForm with the mockProps again for a new test instance
    render(<BookingForm {...mockProps} />);

    // Grab the select element for reservation times and simulate a change
    const reserveHourSelect = screen.getByLabelText(/Reserve hour/);
    fireEvent.change(reserveHourSelect, { target: { value: '17:00' } });

    // Assert that dispatcher (updateTimes) was called
    expect(mockProps.dispatcher).toHaveBeenCalled();
});

import React, { useState } from "react";

export default function BookingForm(props) {

  function handleChange(event) {
    let { name, value } = event.target;
    // Make sure to convert `value` to the right type (number, string, etc.) based on the input
    props.setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function handleTimeChange(event) {
    // Assuming you want to update the reservation time in your form state
    let { value } = event.target;
    props.setForm((prevForm) => ({ ...prevForm, reservationTime: value }));
    console.log(props.availableTimes);
  }

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    console.log(props.form);

    // Here, we assume `submitAPI` is globally available or properly imported
    try {
      const result = await window.submitAPI(props.form); // Using window.submitAPI to bypass ESLint warning
      if (result === true) {
        // Handle success
        alert("Reservation submitted successfully!");
        // Optionally, reset the form or redirect the user
      } else {
        // Handle failure (if `submitAPI` returns false or another value indicating failure)
        alert("Failed to submit reservation.");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("An error occurred while submitting your reservation.");
    }
  }

  return (
    <>
      <h1>Little Lemon Reserve-a-Table Web App</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      >
        <div>
          <label htmlFor="reservationDate">Reservation date</label>
          <input
            name="reservationDate" // Ensure the `name` attribute is set for proper state update
            onChange={handleChange}
            type="date"
            value={props.form.reservationDate}
            id="resDate"
          />
        </div>
        <div>
          <label htmlFor="reservationTime">Reserve hour</label>
          <select name="reservationTime" onChange={handleTimeChange} id="resHour">
            {props.availableTimes.map((time) => {
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="numGuest">Number of Guests</label>
          <input name="guests" id="numGuest" type="number" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select name="occasion" id="occasion" onChange={handleChange}>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

import React, { useState } from "react";

export default function BookingForm(props) {

  function handleChange(event) {
    let { name, value } = event.target;
    props.setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }
  function handleTimeChange(event) {
    props.dispatcher();
    console.log(props.availableTimes);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(props.form);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      >
        <div>
          <label htmlFor="resDate">Reservation date</label>
          <input
            onChange={handleChange}
            type="date"
            value={props.form.reservationDate}
            id="resDate"
          />
        </div>
        <div>
          <label htmlFor="resHour">Reserve hour</label>
          <select onChange={handleTimeChange} id="resHour">
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
          <input id="numGuest" type="number" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" onChange={handleChange}>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
}

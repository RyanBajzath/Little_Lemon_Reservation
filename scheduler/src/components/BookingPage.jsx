import React, { useState } from "react";
import BookingForm from "./BookingForm";

//the component for the table reservations page
export default function BookingPage(props) {

  
  return (
    <>
      <BookingForm form={props.form} setForm={props.setForm} availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes} />
    </>
  );
}

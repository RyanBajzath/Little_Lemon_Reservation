import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import Test from "./Test";
import { useState, useReducer } from "react";

function updateTimes(state, action) {
  console.log("The state has been updated, it is now: " + state)
  return state;
}

let initializeTimes =
[1700, 1800, 1900, 2000, 2100, 2200];

export default function Main() {
  const [form, setForm] = useState({
    reservationTime: "",
    guests: "",
    occasion: "",
    reservationDate: "",
  });

  const [availableTimes, dispatcher] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                form={form}
                setForm={setForm}
                availableTimes={availableTimes}
                dispatcher={dispatcher}
              />
            }
          />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
    </>
  );
}

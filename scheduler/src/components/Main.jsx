/* global fetchAPI */
/* global submitAPI */


import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import Test from "./Test";
import { useState, useReducer, useEffect } from "react";


function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    return action.payload;
  }
  return state;
}




export default function Main() {
  const [form, setForm] = useState({
    reservationTime: "",
    guests: "",
    occasion: "",
    reservationDate: "",
  });

  const [availableTimes, dispatcher] = useReducer(updateTimes, []);

  useEffect(() => {
    fetchAPI(new Date())
      .then(times => dispatcher({ type: 'UPDATE_TIMES', payload: times }))
      .catch(error => {
        console.log(error)
      });
  }, []);


  // Inside your Main component or where appropriate

// Function to handle the submission of the booking form
const handleSubmit = async (formData) => {
  try {
    const isSubmitted = await submitAPI(formData);
    if (isSubmitted) {
      // Handle successful submission
      alert('Booking successfully submitted!');
      // Additional actions like redirecting the user or clearing the form
    } else {
      // Handle unsuccessful submission
      alert('Failed to submit booking. Please try again.');
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('An error occurred. Please try again.');
  }
};

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
                onSubmit={handleSubmit} // Passing handleSubmit function as a prop
              />
            }
          />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
    </>
  );
}

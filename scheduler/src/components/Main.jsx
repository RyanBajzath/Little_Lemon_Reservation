import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import Test from "./Test";
import { useState } from "react";

export default function Main() {
  const [form, setForm] = useState({
    
    reservationTime: "",
    guests: "",
    occasion: ""

    

})
const [availableTimes , setAvailableTimes ] = useState([1700,1800,1900,2000,2100,2200])
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage form={form} setForm={setForm} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} />
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </main>
    </>
  );
}

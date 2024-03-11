import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import Test from "./Test";

export default function Main() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </main>
    </>
  );
}

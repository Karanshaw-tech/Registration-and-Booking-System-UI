import React from "react";
import RegistrationForm from "./RegistrationForm";
import BookingForm from "./BookingForm";

function App() {
  return (
    <div style={{padding: "20px"}}>
      <h2>User Registration Form</h2>
      <RegistrationForm />
      <hr />
      <h2>Booking Form</h2>
      <BookingForm />
    </div>
  );
}

export default App;

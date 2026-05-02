import React, { useState } from "react";

function BookingForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: ""
  });
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.date || !form.time) {
      setMsg("All fields required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setMsg("Invalid email");
      return;
    }
    setMsg("Appointment booked successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Full Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Phone" onChange={(e)=>setForm({...form,phone:e.target.value})}/>
      <input type="date" onChange={(e)=>setForm({...form,date:e.target.value})}/>
      <input type="time" onChange={(e)=>setForm({...form,time:e.target.value})}/>
      <button type="submit">Book</button>
      <p>{msg}</p>
    </form>
  );
}

export default BookingForm;

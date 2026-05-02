import React, { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let err = {};
    if (!form.firstName) err.firstName = "Required";
    if (!form.lastName) err.lastName = "Required";
    if (!form.email) err.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Invalid email";
    if (!form.password) err.password = "Required";
    if (form.password !== form.confirmPassword)
      err.confirmPassword = "Passwords do not match";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length === 0) {
      setSuccess("Registration Successful!");
      setErrors({});
    } else {
      setErrors(err);
      setSuccess("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {["firstName","lastName","email","password","confirmPassword"].map((field) => (
        <div key={field}>
          <input
            type={field.includes("password") ? "password" : "text"}
            placeholder={field}
            value={form[field]}
            onChange={(e)=>setForm({...form,[field]:e.target.value})}
          />
          <p style={{color:"red"}}>{errors[field]}</p>
        </div>
      ))}
      <button type="submit">Register</button>
      <p style={{color:"green"}}>{success}</p>
    </form>
  );
}

export default RegistrationForm;

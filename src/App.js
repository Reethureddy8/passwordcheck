import React, { useState } from "react";
import "./App.css";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validatePassword = (inputPassword) => {
    if (inputPassword.length < 8) {
      setMessage("Password must be at least 8 characters long.");
    } else if (!/[a-z]/.test(inputPassword)) {
      setMessage("Password must contain at least one lowercase letter.");
    } else if (!/[A-Z]/.test(inputPassword)) {
      setMessage("Password must contain at least one uppercase letter.");
    } else if (!/[0-9]/.test(inputPassword)) {
      setMessage("Password must contain at least one number.");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(inputPassword)) {
      setMessage("Password must contain at least one special character.");
    } else {
      setMessage("Password is valid!");
    }
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword); // Automatically validate the password on input change
  };

  return (
    <div>
      <h2>Password Validity Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      {message && <p>{message}</p>}
    </div>
  );
};

export default PasswordChecker;

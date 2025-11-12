import React from "react";
import "./auth.css";

function Signup() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;

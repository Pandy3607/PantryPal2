import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <nav style={{ textAlign: "center", margin: "20px" }}>
        <Link to="/login" style={{ margin: "10px" }}>Login</Link>
        <Link to="/signup" style={{ margin: "10px" }}>Sign Up</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

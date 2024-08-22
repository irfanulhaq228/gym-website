import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/signup");
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;

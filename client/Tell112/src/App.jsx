import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CrimeReport from "./pages/CrimeReport";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";
import Footer from "./components/Footer";
import Preloader from "./loader/Preloader";
import UserProfile from "./pages/UserProfile";
import NotFound from "./components/NotFound";
import Mascot from "./components/Mascot";
import ReportedCases from "./pages/ReportedCases";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? <Preloader /> : null}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<CrimeReport />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/cases" element={<ReportedCases/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
      <Mascot/>
    </>
  );
}

export default App;

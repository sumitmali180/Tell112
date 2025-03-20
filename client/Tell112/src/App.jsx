import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CrimeReport from "./pages/CrimeReport";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import './App.css'
import Footer from "./components/Footer";

function App() {
  

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<CrimeReport />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App

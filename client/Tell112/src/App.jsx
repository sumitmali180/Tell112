import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./loader/Preloader";

// Lazy-loaded components
const Navbar = React.lazy(() => import("./components/Navbar"));
const Home = React.lazy(() => import("./pages/Home"));
const CrimeReport = React.lazy(() => import("./pages/CrimeReport"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <Router>
      {/* Use Suspense to handle lazy-loaded components */}
      <Suspense fallback={<Preloader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<CrimeReport />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
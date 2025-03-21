import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authApi";
import yellow from "../assets/yellow.jpg";
import PoliceSirenLoader from "../loader/PoliceSirenLoader";

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  // State for form data and errors
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check if token exists in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/"); // Redirect to home page if token exists
    }
  }, [navigate]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(loginUser(formData))
        .unwrap()
        .then((response) => {
          console.log("Login successful:", response);
          // Save token to localStorage
          localStorage.setItem("token", response.token); // Assuming the token is in response.token
          navigate("/"); // Redirect to home page after successful login
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    }
  };

  return (
    <div
      className="min-h-screen pt-16 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${yellow})` }}
    >
      <div className="max-w-md w-full space-y-8 p-8 rounded-lg shadow-inner transform transition-all duration-5000 backdrop-blur-sm bg-white/5 ease-in-out">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-white">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-black hover:text-white"
            >
              Sign up here
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`appearance-none rounded-lg relative block w-full px-4 py-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-all duration-300`}
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`appearance-none rounded-lg relative block w-full px-4 py-3 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-all duration-300`}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full py-3 px-4 bg-gradient-to-r from-amber-300 to-yellow-400 text-black font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {loading ? "Log In..." : "Log In"}
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error.message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
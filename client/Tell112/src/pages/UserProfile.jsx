import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import yellow from "../assets/yellow.jpg";


const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access user data from Redux store
  const { user, token } = useSelector((state) => state.auth);

  // Handle logout
  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <div
      className="min-h-screen pt-16 flex items-center justify-center bg-cover bg-center"
      style={{
              backgroundImage: `url(${yellow})`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
    >
      <div className="max-w-md w-full space-y-8 p-8 rounded-lg shadow-inner transform transition-all duration-500 backdrop-blur-sm bg-white/5 ease-in-out">
        {/* Header */}
        <div>
          <h2 className="text-center text-3xl font-extrabold text-white">
            Your Profile
          </h2>
          <p className="mt-2 text-center text-sm text-white">
            Manage your account details here.
          </p>
        </div>

        {/* User Details */}
        <div className="space-y-4">
          <div className="bg-white/10 rounded-lg p-6 shadow-lg text-white">
            <h3 className="text-xl font-semibold">User Information</h3>
            <p className="mt-2">
              <span className="font-medium">Name:</span> {user?.name || "N/A"}
            </p>
            <p>
              <span className="font-medium">Email:</span> {user?.email || "N/A"}
            </p>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="group relative w-full py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Logout
          </button>

          {/* Back to Home */}
          {/* <Link
            to="/"
            className="block w-full py-3 px-4 bg-gradient-to-r from-amber-300 to-yellow-400 text-black font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition-all duration-300 shadow-lg hover:shadow-2xl text-center"
          >
            Back to Home
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
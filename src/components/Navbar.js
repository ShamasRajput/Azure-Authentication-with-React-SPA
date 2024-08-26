// src/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

function Navbar() {
  const { accounts, instance } = useMsal();
  const navigate = useNavigate(); // Define navigate

  const isSignedIn = accounts.length > 0;

  const handleLogout = () => {
    instance.logoutPopup().then(() => {
      navigate("/login");
    }).catch((error) => {
      console.error("Logout failed:", error);
    });
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-semibold hover:text-gray-300">
          Home
        </Link>
        <div className="flex items-center space-x-4">
          {!isSignedIn ? (
            <>
              <Link to="/login" className="text-white text-lg font-semibold hover:text-gray-300">
                Login
              </Link>
              {/* Optionally add Signup link */}
              {/* <Link to="/signup" className="text-white hover:text-gray-300">
                Signup
              </Link> */}
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

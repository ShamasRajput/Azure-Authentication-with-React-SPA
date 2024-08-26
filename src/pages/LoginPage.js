// src/LoginPage.js
import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLoginPopup = () => {
    instance.loginPopup(loginRequest).then((response) => {
      navigate("/"); // Redirect to homepage after successful login
    }).catch(e => {
      console.error(e);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login with Microsoft</h2>
        <button
          onClick={handleLoginPopup}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in with Popup
        </button>
      </div>
    </div>
  );
}

export default LoginPage;

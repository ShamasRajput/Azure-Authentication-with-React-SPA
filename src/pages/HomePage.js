// src/HomePage.js
import React from "react";
import { useMsal } from "@azure/msal-react";

function HomePage() {
  const { accounts } = useMsal();
  const userName = accounts[0] && accounts[0].username;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome {userName}</h1>
        <p className="text-center">You're logged in and ready to go!</p>
      </div>
    </div>
  );
}

export default HomePage;

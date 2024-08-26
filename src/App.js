// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MsalProvider } from "@azure/msal-react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { msalConfig } from "./authConfig";
import { PublicClientApplication } from "@azure/msal-browser";

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoute component={HomePage} />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </MsalProvider>
  );
}

export default App;

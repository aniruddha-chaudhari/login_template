import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./login";
import Signup from "./Signup";
import ProfilePage from "./profile";
import './App.css';
import * as React from "react";


   
 

function App() {
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
  };

  // Function to check token expiration
  const checkTokenExpiration = () => {
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    if (tokenExpiration && Date.now() > tokenExpiration) {
      // Token expired, remove it
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
      setAuthenticated(false);
    }
  };

  // Check token expiration when component mounts
  checkTokenExpiration();

  return (
   
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={authenticated ? <Navigate to="/profile" /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage logout={handleLogout} />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;

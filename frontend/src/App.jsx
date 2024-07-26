import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './components/AuthContext';
import Header from './components/Header/Header';
import Destinations from './pages/DestinationsPage/Destinations';
import Packages from './pages/Packages/Packages';
import HomePage from './pages/HomePage/HomePage';
import Booking from './pages/BookingPage/Booking';
import Profile from './pages/ProfilePage/Profile';
import Register from './pages/RegisterPage/Register';
import LogIn from './pages/LoginPage/LogIn';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('loggedIn') === 'true');

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('loggedIn') === 'true');
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('loggedIn', 'false');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin }}>
      <>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/logIn" element={<LogIn onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            {isLoggedIn && (
              <>
                <Route path="/booking" element={<Booking />} />
                <Route path="/profile" element={<Profile />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </>
    </AuthContext.Provider>
  );
}

export default App;

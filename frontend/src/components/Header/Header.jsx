// Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import NavLink from '../navComponents/NavLink';

const Header = ({ isLoggedIn, onLogout }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem('loggedIn', 'false');
    onLogout();
    localStorage.clear();
  };

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <FontAwesomeIcon icon={faGlobe} />
          <span><a href="/">WANDERLUST</a></span>
        </div>
        <nav>
          <ul className="navbar">
            <NavLink href="/">Home</NavLink>
            <NavLink href="destinations">Destinations</NavLink>
            <NavLink href="packages">Packages</NavLink>
          </ul>
        </nav>
        <div className="user-actions">
          {isLoggedIn ? (
            <>
              <NavLink href="profile">Profile</NavLink>
              <li><a href="#" onClick={handleLogout}>Log Out</a></li>
            </>
          ) : (
            <>
              <NavLink href="logIn">Log In</NavLink>
              <NavLink href="register">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

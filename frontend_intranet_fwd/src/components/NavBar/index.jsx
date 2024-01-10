import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../logo";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };


  return (
    <nav className="navbar">
      <Logo className="navbar__logo" /> {/* Agregar el componente de Logo */}
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="users" className="navbar__link">
            Users
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/communications" className="navbar__link">
            Communications
          </Link>
        </li>
        <li className="navbar__item">
          <div className="navbar__dropdown">
            <button
              className="navbar__dropdown-button"
              onClick={toggleDropdown}
            >
              Add
            </button>
            {dropdownVisible && (
              <div className="navbar__dropdown-content">
                <Link to="/users/new" className="navbar__link">
                  Add User
                </Link>
                <Link to="/communications/new" className="navbar__link">
                  Add Communication
                </Link>
                <Link to="/calendars/new" className="navbar__link">
                  Add Calendar
                </Link>
              </div>
            )}
          </div>
        </li>
        <li className="navbar__item">
          <Link to="/calendars" className="navbar__link">
            Calendars
          </Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;

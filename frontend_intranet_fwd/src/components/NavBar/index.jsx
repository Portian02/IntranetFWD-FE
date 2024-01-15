import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../logo";
import User from "../user";
import Logout from "../logout";
const Navbar = ({currUser, setCurrUser}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar">
      <Logo className="navbar__logo" /> {/* Agregar el componente de Logo */}
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/home" className="navbar__link">
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
          <Link to="/announcements" className="navbar__link">
            Announcements
          </Link>
        </li>
        <li className="navbar__item">
          <div className="navbar__dropdown">
            <button className="navbar__dropdown-button" onClick={toggleDropdown}>
              Add
            </button>
            {dropdownVisible && (
              <div className="navbar__dropdown-content">
                <Link to="/users/new" className="navbar__link">
                  New  User
                </Link>
                <Link to="/calendars/new" className="navbar__link">
                  New Calendar
                </Link>
                <Link to="/announcements/new" className="navbar__link">
                  New Announcements
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
     {currUser ? (
        <div className="navbar__user">
          <Logout currUser={currUser} setCurrUser={setCurrUser} />
        </div>
      ) : (
        <div className="navbar__user">
          <User currUser={currUser} setCurrUser={setCurrUser} />
        </div>  
      )}

    </nav>
  );
};

export default Navbar;

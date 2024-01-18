import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../logo";
import Logout from "../logout";
const Navbar = ({currUser, setCurrUser}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const role = localStorage.getItem("role");
  // console.log("Hi  world I´m the",role);  
  return (
    <nav className="navbar">
      <Logo className="navbar__logo" /> {/* Agregar el componente de Logo */}
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/home" className="navbar__link">
            Home
          </Link>
        </li>
        {role === "admin" &&(
        <li className="navbar__item">
          <Link to="/users" className="navbar__link">
            Users
          </Link>
        </li>)}
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
        {role === "admin" &&(
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
          )}
        </li>
        <li className="navbar__item">
          <Link to="/calendars" className="navbar__link">
            Calendars
          </Link>
        </li>
      </ul>
    {currUser? "" : <Logout setCurrUser={setCurrUser}/>}

       
    </nav>
  );
};

export default Navbar;

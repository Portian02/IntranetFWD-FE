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
          <Link to="/profile" className="navbar__link">
            Perfil
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
          <Link to="/calendars" className="navbar__link">
            Calendars
          </Link>
        </li>
       
        <li className="navbar__item">
          <div className="navbar__dropdown">
            <button className="navbar__dropdown-button" onClick={toggleDropdown}>
              Others
            </button>
            {dropdownVisible && (
              <div className="navbar__dropdown-content">
          <Link to="/admonitions" className="navbar__link">
            Admontions
          </Link>
        
           
          <Link to="/justifications" className="navbar__link">
            Justifications
          </Link>
        
         
          <Link to="/announcements" className="navbar__link">
            Announcements
          </Link>
        
        <Link to="/DocumentsStorage" className="navbar__link">
        Documents
        </Link>
              </div>
            )}
          </div>
        </li>
      </ul>
      <div className="logout-btn">
    {currUser? "" : <Logout setCurrUser={setCurrUser}/>}
      </div>
      
    

       
    </nav>
  );
};

export default Navbar;


import React, { useState } from "react";
import PasswordChange from "../changePassword";
import "./profile.css"
import Navbar from "../NavBar/index";


const Profile = () => {
    const [showPasswordChange, setShowPasswordChange] = useState(false);
     const perfil = localStorage.getItem("perfil");
  const perfilArray = perfil.split(",");
  console.log(perfilArray, "soy perfil");

    const handleButtonClick = () => {
        setShowPasswordChange(true);
    };

    return (
        <div>
          <Navbar/>
            <div className="container">
                <div></div>
                <h3>Name:  {perfilArray[0]}</h3>
                <br />
                <h6>Email: {perfilArray[1]}</h6>
                <br />
                <h6>Role:  {perfilArray[2]}</h6>
                <br />
                <h6>Number:{perfilArray[3]} </h6>
                <br />
                 <h4>Change Password </h4>
                 {showPasswordChange ? (
                    <PasswordChange />
                     
                ) : (
                   
                    <button onClick={handleButtonClick}>🛎️</button>
                )}
            </div>
        </div>
    );
};

export default Profile;

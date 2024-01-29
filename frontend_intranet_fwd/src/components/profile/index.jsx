import React, { useState } from "react";
import PasswordChange from "../changePassword";
import "./profile.css";
import Navbar from "../NavBar/index";
import Profile_Picture from "./Profile.png";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import student_profile from "./student.png";
import teacher_profle from "./teacher.png";
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
      <Navbar />
      <h1 className="profile-title d-flex justify-content-center">Profile</h1>
      <tr className="d-flex justify-content-center">
        <td >
            {perfilArray[2] === "student" && (
          <Card className="d-flex mt-4 mb-3 student" style={{ width: "12rem" }}>
            <Card.Img variant="top" src={student_profile} />
          </Card>
            )}
            {perfilArray[2] === "admin" && (
           <Card className="d-flex mt-4 mb-3" style={{ width: "12rem" }}>
            <Card.Img variant="top" src={Profile_Picture} />
          </Card>
            )}
            {perfilArray[2] === "teacher" && (
           <Card className="d-flex mt-4 mb-3 teacher" style={{ width: "12rem" }}>
            <Card.Img variant="top" src={teacher_profle} />
          </Card>
            )}
          <Card.Title className="ms-5">
            <h2>{perfilArray[0]}</h2>
          </Card.Title>
        </td>
        <td>
          <ListGroup className="list-group-flush mt-5 ms-5">
            <ListGroup.Item>
              <h6>Email: {perfilArray[1]}</h6>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Role: {perfilArray[2]}</h6>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Number:{perfilArray[3]} </h6>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            {perfilArray[2] === "student" && (
              <Card.Link className="ms-5" href="/admonitions">
                Admonition
              </Card.Link>
            )}
            {perfilArray[2] === "student" && (
              <Card.Link className="ms-3" href="/justifications">Justification</Card.Link>
            )}
            <Card className="mt-3 ms-5">
              {showPasswordChange ? (
                <PasswordChange />
              ) : (
                <button className="change-btn" onClick={handleButtonClick}>
                  {" "}
                  <p className="text-ch">Change Password </p>
                </button>
              )}
            </Card>
          </Card.Body>
        </td>
      </tr>
    </div>
  );
};

export default Profile;

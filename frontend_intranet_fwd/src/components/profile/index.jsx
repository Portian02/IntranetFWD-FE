import React, { useState } from "react";
import PasswordChange from "../changePassword";
import "./profile.css";
import Profile_Picture from "./Profile.png";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import student_profile from "./student.png";
import teacher_profle from "./teacher.png";
import ChangePassword from "./changePassword/modal";
import { useNavigate } from "react-router-dom";
import Logout from "../logout";

const Profile = ({ currUser, setCurrUser }) => {
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const perfil = localStorage.getItem("perfil");
  const perfilArray = perfil.split(",");
  const navigate = useNavigate();
  const handleButtonBack = () => {
    navigate("/home");
  };

  const handleButtonClick = () => {
    setShowPasswordChange(true);
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title d-flex justify-content-center">Profile</h1>
      <tr className="d-flex justify-content-center">
        <td>
          {perfilArray[2] === "student" && (
            <Card
              className="d-flex mt-4 mb-3 student"
              style={{ width: "12rem" }}
            >
              <Card.Img variant="top" src={student_profile} />
            </Card>
          )}
          {perfilArray[2] === "admin" && (
            <Card className="d-flex mt-4 mb-3" style={{ width: "12rem" }}>
              <Card.Img variant="top" src={Profile_Picture} />
            </Card>
          )}
          {perfilArray[2] === "teacher" && (
            <Card
              className="d-flex mt-4 mb-3 teacher"
              style={{ width: "12rem" }}
            >
              <Card.Img variant="top" src={teacher_profle} />
            </Card>
          )}
          <Card.Title className="ms-5 name">
            <h2>{perfilArray[0]}</h2>
          </Card.Title>
        </td>
        <td className="info-user">
          <ListGroup className="list-group-flush mt-4 ms-5">
            <ListGroup.Item className="data">
              <h6>Email: {perfilArray[1]}</h6>
            </ListGroup.Item>
            <ListGroup.Item className="data mt-1">
              <h6>Role: {perfilArray[2]}</h6>
            </ListGroup.Item>
            <ListGroup.Item className="data mt-1">
              <h6>Number:{perfilArray[3]} </h6>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <div className="logout-btn mt-3">
              {currUser ? "" : <Logout setCurrUser={setCurrUser} />}
            </div>
            <button className="button-back" onClick={handleButtonBack}>
              <div className="button-box">
                <span className="button-elem">
                  <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
                <span className="button-elem">
                  <svg viewBox="0 0 46 40">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
              </div>
            </button>
          </Card.Body>
        </td>
      </tr>
      <div className="flex-profile">
        <div className="buttons ms-5">
          {perfilArray[2] === "student" && (
            <Card.Link className="ms-5 mt-2  link" href="/admonitions">
              Admonition
            </Card.Link>
          )}
          {perfilArray[2] === "student" && (
            <Card.Link className="ms-3 mt-2 link" href="/justifications">
              Justification
            </Card.Link>
          )}
          <div className="change_password_conatiner mt-5 ms-5">
            {showPasswordChange ? (
              <PasswordChange />
            ) : (
              <ChangePassword onClick={handleButtonClick} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

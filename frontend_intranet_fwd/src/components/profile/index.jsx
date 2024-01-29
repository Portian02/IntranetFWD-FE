
import React, { useState } from "react";
import PasswordChange from "../changePassword";
import "./profile.css"
import Navbar from "../NavBar/index";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


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
          <tr className="d-flex justify-content-center">
            <td><Card className="d-flex mt-5 " style={{ width: '12rem' }}>
                <Card.Img variant="top" src="https://randomuser.me/api/portraits/women/58.jpg"/>
            </Card>
                <Card.Title className="m-2"><h2>{perfilArray[0]}</h2></Card.Title>
            </td>
            <td>
            <ListGroup className="list-group-flush mt-5 ms-5">
                <ListGroup.Item><h6>Email: {perfilArray[1]}</h6></ListGroup.Item>
                <ListGroup.Item><h6>Role:  {perfilArray[2]}</h6></ListGroup.Item>
                <ListGroup.Item><h6>Number:{perfilArray[3]} </h6></ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link className="m-4" href="/admonitions">Admonition</Card.Link>
                <Card.Link href="/justifications">Justification</Card.Link>
                <Card className="mt-5 ms-5">
                    <h4>Change Password </h4>
                        {showPasswordChange ? (
                    <PasswordChange />   
                ) : (
                    <button onClick={handleButtonClick}>🛎️</button>
                )}</Card> 
            </Card.Body></td>
          </tr>
            
        </div>
    );
}

export default Profile;

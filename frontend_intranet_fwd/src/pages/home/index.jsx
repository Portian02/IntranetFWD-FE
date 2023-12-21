import React from 'react'
import { useState } from 'react'; 
import User from '../../components/users';
// import './Home.css';
import PrivateText from '../../components/privateText';
import Navbar from '../../components/NavBar';


const Home = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <div className="Home">
      <Navbar />
    <User currUser={currUser} setCurrUser={setCurrUser} />
  </div>
  )
}

export default Home

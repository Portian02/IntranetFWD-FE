import React from "react";
import Routing from "./components/routes";
import './App.css';
import Navbar from "./components/NavBar";
import User from "./components/user";
import { useState } from "react";

const App=()=>{
  const [currUser, setCurrUser] = useState(null);
  return (
    <div className="App">
      <Navbar />
    <User currUser={currUser} setCurrUser={setCurrUser} />
    <Routing currUser={currUser} setCurrUser={setCurrUser} /> 
  </div>
  )
}

export default App;

import React from "react";
import Routing from "./components/routes";
import { useState } from 'react';
import './App.css';
import User from "./components/user";
import PrivateText from "./components/privateText";

const App=()=>{
  const [currUser, setCurrUser]=useState(null);
  return (
    <div className="App">
      <User currUser={currUser} setCurrUser={setCurrUser} />
    </div>
  );
}

export default App;

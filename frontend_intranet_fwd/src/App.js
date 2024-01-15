import React from "react";
import Routing from "./components/routes";
import './App.css';
import Navbar from "./components/NavBar";
import User from "./components/user";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";

const App=()=>{

  const [currUser, setCurrUser] = useState(null);
  
  return (
    <div className="App">
      <Navbar currUser={currUser} setCurrUser={setCurrUser}/>
      <Routing currUser={currUser} setCurrUser={setCurrUser} /> 
      <Footer />
   </div>
  )
}

export default App;

import React from "react";
import Routing from "./components/routes";
import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=>{

  const [currUser, setCurrUser] = useState(null);
  
  return (
    <div className="App">
  
      <Routing currUser={currUser} setCurrUser={setCurrUser} /> 

   </div>
  )
}

export default App;

import React from "react";
import Routing from "./components/routes";
import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { AuthProvider } from "./context/AuthContext";
const App=()=>{

  const [currUser, setCurrUser] = useState(null);
  
  return (
    <div className="App">
    {/* <AuthProvider> */}
      <Routing currUser={currUser} setCurrUser={setCurrUser} /> 
    {/* </AuthProvider> */}

   </div>
  )
}

export default App;

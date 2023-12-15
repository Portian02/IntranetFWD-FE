import React from "react";
import { Outlet } from "react-router-dom";

function NavBar() {
  return <>
  
  <p>Soy el navBar</p>
  <Outlet/>
  </>;
}

export default NavBar;

import React from 'react'
import Login from '../../components/login'
import { useState } from 'react'
const LoginPage = ({currUser, setCurrUser}) => {
    const [show, setShow]=useState(true)
  return (
    <Login currUser={currUser} setCurrUser={setCurrUser} setShow={setShow}/> 
    )
}

export default LoginPage
import React from 'react'
import Login from '../../components/login'
import { useState } from 'react'
// import useAuth from '../../hooks/useAuth'
// import { useNavigate } from 'react-router-dom'
const LoginPage = ({currUser, setCurrUser}) => {
  // const navigate = useNavigate()
  // const { setAuth } = useAuth()
  const [show, setShow]=useState(true)

// const handleLogin = (userInfo) => {
//   setAuth(userInfo)
//   navigate('/home')
// }


  return (
    <Login currUser={currUser} setCurrUser={setCurrUser} setShow={setShow}/> 
    )
}

export default LoginPage
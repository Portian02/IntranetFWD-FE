import { useRef } from "react";
import "./login.css";

const Login = ({ setCurrUser, setShow }) => {
  const formRef = useRef();

  const login = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3001/login";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      const token = data.token; // Ajusta esto según la estructura de tu respuesta

      if (token) {
        localStorage.setItem("token", token);
      }

      setCurrUser(data);
      setShow(false);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo, setCurrUser);
    e.target.reset();
  };

const goToHome = () => {

  window.location.href = "/home"
  }






  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="login-form">
        Email:{" "}
        <input
          type="email"
          name="email"
          placeholder="email"
          className="email-input"
        />
        <br />
        Password:{" "}
        <input
          type="password"
          name="password"
          placeholder="password"
          className="password-input"
        />
        <br />
        <input onClick={goToHome} type="submit" value="Login" className="submit-button" />
      </form>
      <br />
    </div>
  );
};

export default Login;

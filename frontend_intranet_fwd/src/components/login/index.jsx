
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
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      console.log("Soy la data", data);
      console.log("Soy response", response);
      debugger;
      if (!response.ok) throw data.error;
      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrUser(data);
    } catch (error) {
      console.log("error", error);
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

  return(
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="login-form">
        Email: <input type="email" name='email' placeholder="email" className="email-input" />
        <br/>
        Password: <input type="password" name='password' placeholder="password" className="password-input" />
        <br/>
        <input type='submit' value="Login" className="submit-button" />
      </form>
      <br />
    </div>
  );
};
export default Login;

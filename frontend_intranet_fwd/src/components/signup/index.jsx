import { useRef } from "react";
import "./singup.css";
const Signup = ({ setCurrUser, setShow }) => {
  const formRef = useRef();
  const signup = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3001/api/users";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          // accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      console.log("Soy response", response);
      console.log("Soy userInfo", userInfo);
      const data = await response.json();
      console.log("Soy Data", data);
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
      user: {
        identification: data.identification,
        username: data.name,
        number: data.number,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
        borndate: data.borndate,
        type_user_id: data.type_user_id,
        role: data.role,
      },
    };
    signup(userInfo, setCurrUser);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <div className="signup-container">
      <form ref={formRef} onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="identification">Identification:</label>
        <input
          type="identification"
          name="identification"
          id="identification"
          placeholder="identification"
          className="signup-input"
        />
        <label htmlFor="name">Name:</label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="name"
          className="signup-input"
        />
        <br />
        <label htmlFor="number">Number:</label>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="number"
          className="signup-input"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="signup-input"
        />
        <label htmlFor="borndate">Born Date:</label>
        <input
          type="date"
          name="borndate"
          id="borndate"
          placeholder="borndate"
          className="signup-input"
        />
        <br />
        <label htmlform="type_user_id">Type User:</label>
        <input
          type="number"
          name="type_user_id"
          id="type_user_id"
          placeholder="type_user_id"
          className="signup-input"

         />

        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="signup-input"
        />
        <br />
        <label htmlFor="password_confirmation">Password Confirmation:</label>
        <input
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          placeholder="password_confirmation"
          className="signup-input"
        />
        <br />
        <label htmlFor="role">Role:</label>
        <input
          type="role"
          name="role"
          id="role"
          placeholder="role"
          className="signup-input"
        />
        <br />
        <input type="submit" value="Submit" className="signup-submit" />
      </form>

      <br />
      <div className="signup-login">
        Already registered,{" "}
        <a href="#login" onClick={handleClick} className="signup-login-link">
          Login
        </a>{" "}
        here.
      </div>
    </div>
  );
};
export default Signup;

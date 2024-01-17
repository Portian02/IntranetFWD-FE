import { useRef } from "react";
import "./singup.css";
import Navbar from "../NavBar";

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
      localStorage.setItem("token", response.headers.get("Authorization"))
      setCurrUser(data) 
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
      <Navbar />
      <form ref={formRef} onSubmit={handleSubmit} className="form">
      <p className="title-user">Register</p>
     
      <div className="flex">
        <label>
          <input
            required
            placeholder=""
            type="identification"
            name="identification"
            id="identification"
            className="input"
          />
          <span>Identification</span>
        </label>

        <label>
          <input
            required
            placeholder=""
              name="name"
              id="name"
            type="text"
            className="input"
          />
          <span>Name</span>
        </label>
      </div>

    <label>
        <input
          required
          placeholder=""
            type="number"
          name="number"
          id="number"
          className="input"
        />
        <span>Number</span>
      </label>

      <label>
        <input
          required
          placeholder=""
          type="email"
           name="email"
          id="email"
          className="input"
        />
        <span>Email</span>
      </label>

       <label>
        <input
          required
          placeholder=""
          type="date"
          id="borndate"
          name="borndate"
          className="input"
        />
        <span>Born Date</span>
      </label>

    <label>
      <select
        required
        name="type_user_id"
        id="type_user_id"
        className="input"
      >
        <option value="">Select Type User</option>
        <option value="1">Student</option>
        <option value="2">Teacher</option>
        <option value="3">Admin</option>
      </select>
      <span>Type User</span>
    </label>

      <label>
        <input
          required
          placeholder=""
          type="password"
          name="password"
          id="password"
          className="input"
        />
        <span>Password</span>
      </label>

      <label>
        <input
          required
          placeholder=""
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          className="input"
        />
        <span>Confirm password</span>
      </label>

        <label>
          <select
            required
            name="role"
            id="role"
            className="input"
          >
            <option value="">Select</option>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <span>Role</span>
        </label>

      <input type="submit" value="Submit" className="submit-btn" />

     
    </form>

    </div>
  );
};
export default Signup;

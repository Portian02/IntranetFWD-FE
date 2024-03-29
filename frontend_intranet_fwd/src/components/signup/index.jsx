import { useRef } from "react";
import "./singup.css";
import Swal from "sweetalert2";

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
      window.location.reload();
    } catch (error) {
      console.log("error", error);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  };
  const Default_password = "fwd1234";
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@fwdcostarica\.com$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    if (!isValidEmail(data.email)) {
      alert(
        "El dominio de correo electrónico no es válido. Por favor, utiliza el dominio @fwdcostarica.com"
      );
      return;
    }

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

  return (
    <div className="signup-container">
      <form ref={formRef} onSubmit={handleSubmit} className="form user">
        <h2 className="title-user">Create a New User</h2>

        <div className="flex">
          <label>
            <input
              required
              placeholder=""
              type="identification"
              name="identification"
              id="identification"
              className="input identification"
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
              className="input  name"
            />
            <span>Name</span>
          </label>
        </div>
        <label>
          <input
            required
            placeholder=""
            type="email"
            name="email"
            id="email"
            className="input email"
          />
          <span>Email</span>
        </label>
        <div className="flex">
          <label>
            <input
              required
              placeholder=""
              type="text"
              name="number"
              id="number"
              className="input number"
            />
            <span>Number</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="date"
              id="borndate"
              name="borndate"
              className="input borndate"
            />
            <span>Born Date</span>
          </label>
        </div>
        <div className="flex">
          <label>
            <input
              required
              placeholder=""
              type="password"
              name="password"
              id="password"
              defaultValue={Default_password}
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
              defaultValue={Default_password}
              className="input"
            />
            <span>Confirm password</span>
          </label>
        </div>

        <div className="flex">
          <label>
            <select
              required
              name="type_user_id"
              id="type_user_id"
              className="input type_user_id"
            >
              <option value="">Select Type User</option>
              <option value="1">Student</option>
              <option value="2">Teacher</option>
              <option value="3">Admin</option>
            </select>
            <span>Type</span>
          </label>

          <label>
            <select required name="role" id="role" className="input role">
              <option value=""></option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            <span>Role</span>
          </label>
        </div>

        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
};
export default Signup;

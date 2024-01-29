import React, { useState } from "react";
import Swal from "sweetalert2";
import "./chnage.css";
const PasswordChange = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleChangePassword = async () => {
    try {
      const id = localStorage.getItem("id");
      console.log("ID PARA CAMBIAR", id);

      const response = await fetch(`http://localhost:3001/api/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            password,
            password_confirmation: passwordConfirmation,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Error al cambiar la contraseña");
      }
      setPassword("");
      setPasswordConfirmation("");

      const data = await response.json();
      console.log("LO QUE RECIBO", data);

      // Puedes redirigir al usuario o mostrar algún mensaje de éxito aquí
      console.log("Password changed successfully");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "👏Password changed successfully 😎",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password does not match!",
      });
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  };



  return (
    <div className="d-flex flex-column justify-content-center p-4"> 
      <label>New Password:</label>
      <input
        className="input-password-change mr-4 mb-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>Password Corfimation:</label>
      <input
        className="input-confirmation-password-change"
        type="password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      
      <button
        className="chnage-password justify-content-cneter mb-4 mt-2 "
        onClick={handleChangePassword}
      >
        Change
      </button>
    </div>
  );
};

export default PasswordChange;

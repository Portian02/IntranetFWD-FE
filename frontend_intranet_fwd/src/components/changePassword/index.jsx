// En tu componente React (por ejemplo, PasswordChangeComponent.js)

import React, { useState } from 'react';


const PasswordChange = () => {

    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
    const handleChangePassword = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/users/update_password', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              password,
              password_confirmation: passwordConfirmation,
            },
          }),
        });
  
        if (!response.ok) {
          throw new Error('Error al cambiar la contraseña');
        }
  
        // Maneja la respuesta del backend según tus necesidades
        const data = await response.json();
        console.log(data);
  
        // Puedes redirigir al usuario o mostrar algún mensaje de éxito aquí
      } catch (error) {
        // Maneja los errores, puedes mostrar mensajes de error o realizar otras acciones
        console.error('Error al cambiar la contraseña:', error);
      }
    };

  return (
    <div>
      <h2>Cambio de Contraseña</h2>
      <label>Nueva Contraseña:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>Confirmar Contraseña:</label>
      <input
        type="password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <button onClick={handleChangePassword}>Cambiar Contraseña</button>
    </div>
  );
};


export default PasswordChange;

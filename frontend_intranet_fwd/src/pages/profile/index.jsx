import React from 'react';
import Navbar from '../../components/NavBar';
const Profile = () => {
    // Aquí puedes obtener la información del usuario actualmente conectado
    const currentUser = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        // ... otras propiedades del usuario
    };

    return (
        <div>
            <Navbar />
            <h2>Perfil de Usuario</h2>
            <p>Nombre: {currentUser.name}</p>
            <p>Email: {currentUser.email}</p>
        </div>
    );
};

export default Profile;

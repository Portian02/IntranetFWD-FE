import React from 'react';
import { useAuth } from 'tu-libreria-de-autenticacion';
import { Redirect, Outlet } from 'react-router-dom';
const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated() ? (
        <Outlet />
    ) : (
        <Redirect to="/login" />
    );
};

export default PrivateRoute;

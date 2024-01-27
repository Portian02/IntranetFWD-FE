import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoAuth = () => {
    const Navigate = useNavigate();

    const handleReturnHome = () => {
       Navigate('/home');
    };

    return (
        <div>
            <h1>You are not Authorizide</h1>
            <button onClick={handleReturnHome}>Back Home</button>
        </div>
    );
};

export default NoAuth;

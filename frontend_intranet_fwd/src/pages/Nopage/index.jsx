
import React from 'react';
import './Nopages.css';
const PageNotFound = () => {
    return (
        <div class="container-Nopage">


        <div className="page-not-found">
            <h1 className="page-not-found__title">Oops!</h1>
            <p className="page-not-found__message">Looks like you've stumbled upon a page that doesn't exist.</p>
            <p className="page-not-found__message">Don't worry, we're here to help you get back on track!</p>
            <img className="page-not-found__image" src="http://www.w3.org/2000/svg" alt="404 Error" />
        </div>

        </div>
    );
};

export default PageNotFound;

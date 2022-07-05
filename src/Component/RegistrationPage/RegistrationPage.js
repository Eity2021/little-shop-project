import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'
const RegistrationPage = () => {
    return (
        <div>
            <h1>this is reg page</h1>



            <div>
               
           <Link to='/login'>Login</Link>
           
           </div>
        </div>
    );
};

export default RegistrationPage;
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";
import Button from "react-bootstrap/Button";
import { FaGoogle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import auth from './../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";





const RegistrationPage = () => {

const navigate = useNavigate()

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [confirmPassword,setConfirmPassword] = useState('');
const [error,setError] = useState('');



const handleEmailBlur = (event) => {
    setEmail(event.target.value);
}

const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
}

const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
}

const [  createUserWithEmailAndPassword ,user] = useCreateUserWithEmailAndPassword(auth)

if(user){
  navigate('/shop')
}


const handleCreateAccount = (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
        setError('password does not match')
        return;

    }
    if(password.length < 6){
        setError('password must be 6 character')
    }

    createUserWithEmailAndPassword(email, password)
}




  return (
    <div className="login_area">
      <div className="login">
        <h1 className="heading">SignUp</h1>
        <div className="form_area">
          <Form onSubmit={handleCreateAccount}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <p className="form_name">Email</p>
              <Form.Control
                className="inputField"
                type="email"
                placeholder="Email"
                name='email'
                onBlur={handleEmailBlur}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <p className="form_name">Password</p>
              <Form.Control
                className="inputField"
                type="password"
                placeholder="Password"
                name="password"
                onBlur={handlePasswordBlur}
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <p className="form_name">confirm password</p>
              <Form.Control
                className="inputField"
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                onBlur={handleConfirmPasswordBlur}
              />
            </Form.Group>
            <div className="log_button">
              <Button variant="primary" type="submit">
                login
              </Button>
            </div>
            <p>{error}</p>
          </Form>
        </div>

        <div className="navigate">
          <small className="account">
            {" "}
            Don't have an account?{" "}
            <Link className="link" to="/login">
              Please Login
            </Link>
          </small>
        </div>

        <div className="log_icons">
          <span className="logIcon">
            <FaGoogle />
          </span>
          <span className="logIcon">
            <BsFacebook />
          </span>
          <span className="logIcon">
            <AiFillGithub />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

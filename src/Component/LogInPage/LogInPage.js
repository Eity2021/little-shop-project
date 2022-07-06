// import Button from "react-bootstrap/Button";
// import React, { useState } from "react";
// import { Form } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
// import { BsFacebook } from "react-icons/bs";
// import { AiFillGithub } from "react-icons/ai";
// import "./LogInPage.css";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";

// const LogInPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleEmailBlur = (event) => {
//     setEmail(event.target.value);
//   };
//   const handlePasswordBlur = (event) => {
//     setPassword(event.target.value);
//   };

//   const [signInWithEmailAndPassword, user, loading] =
//     useSignInWithEmailAndPassword(auth);

//   if (user) {
//     navigate("/shop");
//   }

//   const handleFormAdd = (event) => {
//     event.preventDefault();
//     signInWithEmailAndPassword(email, password);
//   };

//   return (
//     <div className="login_area">
//       <div className="login">
//         <h1 className="heading">Login</h1>
//         <div className="form_area">
//           <Form onSubmit={handleFormAdd}>
//             <Form.Group className="mb-3 " controlId="formBasicEmail">
//               <p className="form_name">Email</p>
//               <Form.Control
//                 className="inputField"
//                 type="email"
//                 placeholder="Enter email"
//                 name="email"
//                 onBlur={handleEmailBlur}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <p className="form_name">Password</p>
//               <Form.Control
//                 className="inputField"
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 onBlur={handlePasswordBlur}
//               />
//             </Form.Group>
//             {loading && <span>loading....</span>}
//             <div className="log_button">
//               <Button variant="primary" type="submit">
//                 login
//               </Button>
//             </div>
//             <p>{error}</p>
//           </Form>
//         </div>

//         <div className="navigate">
//           <small className="account">
//             {" "}
//             Don't have an account?{" "}
//             <Link className="link" to="/registration">
//               Create New Account
//             </Link>
//           </small>
//         </div>

//         <div className="log_icons">
//           <span className="logIcon">
//             <FaGoogle />
//           </span>
//           <span className="logIcon">
//             <BsFacebook />
//           </span>
//           <span className="logIcon">
//             <AiFillGithub />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogInPage;

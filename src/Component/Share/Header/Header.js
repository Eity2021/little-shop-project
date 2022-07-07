import React from "react";
import "./Header.css";
import logo from "../../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="" />
      </div>


        <div className="nav_list">
          <Link className="nav_a" to="/">
            Shop
          </Link>
          <Link className="nav_a" to="order">
            Orders
          </Link>
          <Link className="nav_a" to="inventory">
            Inventory
          </Link>
          <Link className="nav_a" to="about">
            About
          </Link>
         {
          user ?
           <button  onClick={handleSignOut}  className="signOut">sign out</button> :
          <Link className="nav_a" to="login">
          Login
        </Link>
         }
        </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Header.css";
import logo from "../../../images/Logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
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
        </div>
    </div>
  );
};

export default Header;

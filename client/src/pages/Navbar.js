import React from "react";
import "../css/Navbar.css";
import Button from "../component/button/Button";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="log">
          <img
            src={process.env.PUBLIC_URL + "/3-removebg-preview.png"}
            alt="Logo"
            className="logo-size"
          />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Find Freelancers</a>
            </li>
            <li>
              <a href="#">Find Jobs</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="actions">
          <button className="btn">Apply to find work</button>
          <button className="btn2">Find consultant</button>
          <a className="navbar-login-register">LogOut</a>
          <a className="navbar-login-register">Register</a>
        </div>
      </header>
    </>
  );
};

export default Navbar;

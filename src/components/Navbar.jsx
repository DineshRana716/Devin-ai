import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-main">
        <div className="nav-left">
          <h2>Logo</h2>
        </div>
        <div className="nav-right">
          <div className="right-container">
            <div className="right-left">
              <ul>
                <li>Home</li>
                <li>Enterprise</li>
                <li>Pricing</li>
                <li>Customers</li>
              </ul>
            </div>
            <div className="right-middle">
              <ul>
                <li>About Us</li>
                <li>Carrers</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Docs</li>
              </ul>
            </div>
            <div className="right-right">
              <div className="lgn-btn">
                <li>Login</li>
              </div>
                <button className="started-btn">Get Started</button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

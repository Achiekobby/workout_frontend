import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/body_building.jpg";
import "../scss/Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="wrapper">
          <div className="links">
            <ul>
              <Link to="/" className="link">
                <div className="logo_image">
                  <img src={logo} alt="body_building_logo" />
                </div>
                <h3>Workout</h3>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

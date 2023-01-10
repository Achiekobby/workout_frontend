import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/body_building.jpg";
import "../scss/Navbar.scss";
import { useLogout } from './../hooks/useLogout';
const Navbar = () => {
  const {logout} = useLogout()
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
            <div className="auth-links">
              <button className="btn-button" onClick={()=>logout()}>Logout</button>
              <Link to="/login">Login</Link>
              <Link className="btn" to="/signup">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

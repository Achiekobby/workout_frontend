import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/body_building.jpg";
import "../scss/Navbar.scss";
import {GoPerson} from "react-icons/go"

import { useLogout } from "./../hooks/useLogout";
import useAuthContext from "./../hooks/useAuthContext";
const Navbar = () => {
  const { logout } = useLogout();

  const { user } = useAuthContext();
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
              {user && (
                <>
                  <span>
                    <GoPerson className="person" />
                    <p>{user.email}</p>
                    </span>
                  <button className="btn-button" onClick={() => logout()}>
                    Logout
                  </button>
                </>
              )}
              {!user && (
                <>
                  <Link to="/login">Login</Link>
                  <Link className="btn" to="/signup">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

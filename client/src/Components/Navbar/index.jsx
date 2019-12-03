import React from "../../../node_modules/react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-custom fixed-top navbar-expand-lg">
        <a className="navbar-brand" href="#">
          Jersey
          <img src="./img/X.png" height="20" width="20" alt="Jersey X logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav  droptoggle mr-auto mt-2 mt-lg-0">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/product" className="nav-link">
              Products
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            {props.currentUser ? (
              <React.Fragment>
                <Link to="/admin" className="nav-link">
                  Admin
                </Link>
                <Link to="/logout" className="nav-link">
                  Log Out
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/login" className="nav-link">
                  Log In
                </Link>
                <Link to="/signup" className="nav-link">
                  SignUp
                </Link>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

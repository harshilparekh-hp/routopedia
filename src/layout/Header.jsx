import React from "react";
import logo from "../images/logo192.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      &nbsp;
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img
            src={logo}
            style={{ height: "35px", verticalAlign: "top" }}
            alt="logo"
          ></img>{" "}
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/CryptoDetail/ABC/DEF">
                  Crypto Detail
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product Master
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/Product/CreateProduct">
                      Create Product
                    </NavLink>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Product">
                      Product Item
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Product/Details">
                      Product Details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Product/list">
                      Product list
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>
                Filipkart
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link activeClassName="menu_active" to="/home" className="nav-link active" aria-current="page" exact="true">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link activeClassName="menu_active" to="/contact" className="nav-link active" aria-current="page" exact="true">
                      Contacts
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link activeClassName="menu_active" to="/About" className="nav-link active" aria-current="page" exact="true">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link activeClassName="menu_active" to="/services" className="nav-link active" aria-current="page" exact="true">
                      Services
                    </Link>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

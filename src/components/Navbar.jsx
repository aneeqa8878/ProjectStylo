import React from "react";
import "./Prenav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-between">
        <div className="col text-center">
          <Link to="/">
            <img
              src="https://stylo.pk/cdn/shop/files/Logo-200X100_6f449994-79a7-467d-95c6-ac0903ba695d_140x.png?v=1646139171"
              width={100}
              height={60}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="col-auto">
          <div className="navbar-nav flex-row-reverse bd-highlight pb-1">
            <Link className="me-4 text-reset" to="/contactus">
              <i className="fas fa-envelope mx-1 fa-2x"></i>
            </Link>
            <Link className="me-4 text-reset" to="/contactus">
              <i className="fas fa-phone mx-1 fa-2x"></i>
            </Link>
            <Link className="me-4 text-reset" to="/contactus">
              <i className="fas fa-map-marker-alt mx-1 fa-2x" />
            </Link>
          </div>
        </div>
      </div>
      <hr />

      <nav className="navbar navbar-expand-lg bg-body-white ">
        <div className="container-fluid ">
          <Link className="navbar-brand" style={{color:'red'}} to="/sale">
            Sale
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/womenshoes">
                <b>Women Shoes</b>
              </Link>
              <Link className="nav-link" to="/womenapparels">
                <b>Women Apparels</b>
              </Link>
              <Link className="nav-link" to="/bags">
                <b>Bags</b>
              </Link>
              <Link className="nav-link" to="/kids">
                <b>Kids</b>
              </Link>
              <Link className="nav-link" to="/accessories">
                <b>Accessories</b>
              </Link>
              <Link className="nav-link" to="/beauty">
                <b>Beauty</b>
              </Link>
              <Link className="nav-link" to="/contactus">
                <b>Contact Us</b>
              </Link>
              <Link className="nav-link" to="/login">
                <b>Login</b>
              </Link>
              <Link className="nav-link" to="/signup">
                <b>Signup</b>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

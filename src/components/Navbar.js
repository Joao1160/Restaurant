import Logo from "../images/logo.png";
import React from "react";
import CallIcon from "../images/callIcon.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="logo-image" />
          </div>
          <div className="nav-content">
            <FontAwesomeIcon className="list" icon={faBars} />

            <ul className="links">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/Menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/Blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/About"}>About Us</Link>
              </li>
              <li>
                <Link to={"/ContactUs"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/"}>Reservation</Link>
              </li>
            </ul>
            <div className="phone">
              <img src={CallIcon} alt="call-icon" />
              <a href="tel:+880123456789">+880 123 456 789</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

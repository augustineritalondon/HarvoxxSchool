import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import "./Navbar.css";
import { Link as HashLink } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="hs-cont">
          <div className="nav-sec"></div>
          <ul className="nav-sec">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                {" "}
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/" className="nav-links">About</Link>
            </li> */}
            <li className="nav-item">
              <HashLink
                className="nav-links"
                activeClass="active"
                to="courses"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              > 
                Courses
              </HashLink>
              {/* <Link to="/" className="nav-links">Courses</Link> */}
            </li>
          </ul>
          <div className="span nav-sec">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <span className="nav-item">
                <Link to="/payment" className="nav-links">
                  Register
                </Link>
              </span>
              {/* <Button buttonStyle='btn--red'>Sponsor</Button> */}
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar-mobile">
        <span className="menu-icon" onClick={handleClick}>
          <i class="fas fa-bars"></i>
        </span>
        <div
          className={
            click ? "navbar-mobile-style slide" : "navbar-mobile-style"
          }
        >
          <span className="menu-icon" onClick={handleClick}>
            <i class="fas fa-times"></i>
          </span>
          <ul>
            <li onClick={handleClick}>
              <Link to="/"> Home</Link>
            </li>
            {/* <li onClick={handleClick}><Link to="/"> About</Link></li> */}
            <li onClick={handleClick}>
              <Link to="/"> Courses</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/payment"> Register</Link>
            </li>
            {/* <li onClick={handleClick}><Button buttonStyle='btn--red'>Sponsor</Button></li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

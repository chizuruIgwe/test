import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FaHome, FaSearch, FaUser, FaEmpire } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="hamburger-navbar">
      <div className="nav-wrapper">
      <FontAwesomeIcon icon={faAngleLeft} className="back-button"/>
        <p className="header-title">Bitcoin Wallet</p>
        <div id="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="dots">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <ul>
                <li><a href="#" className="link">Edit</a>
                  <span> <FaSearch /></span></li>
            <li><a href="#" className="link">Courier info</a></li>
            <li><a href="#" className="link">Share</a></li>
            <li><a href="#" className="link red">Remove</a></li>
          </ul>
        </div>
      </div>
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
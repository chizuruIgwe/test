import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FaSearch, } from 'react-icons/fa';

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
                <li>Edit</li>
            <li>Courier info</li>
            <li>Share</li>
            <li>Remove</li>
          </ul>
        </div>
      </div>
    </div>
      </div>
    </nav>
  );
};

export default Navbar;

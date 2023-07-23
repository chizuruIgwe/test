import React from 'react';
import { FaHome, FaSearch, FaUser, FaEmpire } from 'react-icons/fa';

const Footer = () => {
    return (
      <nav className="mobile-footer">
        <div className="mobile-footer-icon">
          <FaHome />
        </div>
        <div className="mobile-footer-icon">
          <FaSearch />
        </div>
        <div className="mobile-footer-icon">
          <FaUser />
            </div>
            <div className="mobile-footer-icon">
          <FaEmpire />
        </div>
      </nav>
    );
  };
  
  export default Footer;
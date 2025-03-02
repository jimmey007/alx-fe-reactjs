import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        background: '#333',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link
        to="/"
        style={{
          color: '#fff',
          textDecoration: 'none',
          margin: '0 15px',
          fontSize: '18px',
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          color: '#fff',
          textDecoration: 'none',
          margin: '0 15px',
          fontSize: '18px',
        }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{
          color: '#fff',
          textDecoration: 'none',
          margin: '0 15px',
          fontSize: '18px',
        }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{
          color: '#fff',
          textDecoration: 'none',
          margin: '0 15px',
          fontSize: '18px',
        }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
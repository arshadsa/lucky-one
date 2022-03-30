import React from 'react';
// import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <nav className='header img-fluid'>
      <h2 style={{color: 'purple'}}>Random Purchase</h2>
      <h3>Choose At Most 4 Items</h3>
    </nav>
  );
};

export default Header;
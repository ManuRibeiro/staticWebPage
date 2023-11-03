import React from 'react';
import './Navbar.css';
import icon from '../assets/grouppic.png'


const Navbar = () => {
  return (
    <div className="navbar">
      <img src={icon}></img>
      <a href="#" className="nav-link">Project</a>
      <a href="#" className="nav-link">About</a>
    </div>
  );
}

export default Navbar;

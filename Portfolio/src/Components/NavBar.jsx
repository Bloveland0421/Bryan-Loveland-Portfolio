import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const NavBar = ({ isOpen, toggleNav }) => {
  return (
    <div className={`nav ${isOpen ? 'open' : ''}`}>
      <button className="nav-toggle" onClick={toggleNav}>
        {isOpen ? '←' : '→'}
      </button>
      <ul>
        <li className='navHeader'>Bryan Loveland</li>
        <li className='navHeader'>Portfolio</li>
        <li><NavLink to='/' onClick={toggleNav}><p>Home</p></NavLink></li>
        <li><NavLink to='/about' onClick={toggleNav}><p>About</p></NavLink></li>
        <li><NavLink to='/experience' onClick={toggleNav}><p>Experience</p></NavLink></li>
        <li><NavLink to='/mentoring' onClick={toggleNav}><p>Mentoring</p></NavLink></li>
        <li><NavLink to='/leadership' onClick={toggleNav}><p>Leadership</p></NavLink></li>
        <li><NavLink to='/contact' onClick={toggleNav}><p>Contact</p></NavLink></li>
      </ul>
      <img className='navBarImage' src="/public/unnamed.jpg" alt="Profile" />
    </div>
  );
};

export default NavBar;
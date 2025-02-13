import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <NavBar isOpen={isOpen} toggleNav={toggleNav} />
      <div className={`content ${isOpen ? 'shifted' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-40 h-10 flex bg-white rounded-lg items-center justify-center shadow-md"
      >
        <p className="font-bold blue-gradient_text">UBUNTU KNIGHTS</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/challenges"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          Challenges
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

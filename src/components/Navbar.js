import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaHome, FaMusic } from 'react-icons/lib/fa';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1 className="App-title">moosic</h1>
      <NavLink to="/search" activeClassName="selected"><FaSearch />Search</NavLink>
      <NavLink to="/browse" activeClassName="selected"><FaHome />Home</NavLink>
      <NavLink to="/collection" activeClassName="selected"><FaMusic />Your Music</NavLink>
      <h2>Recently Played</h2>
      <ul>
        <li>
          <div>Unimagined</div>
          <div className="album-type">Album</div>
        </li>
        <li>
          <div>Ground Dweller</div>
          <div className="album-type">Album</div>
        </li>
        <li>
          <div>Before I Cave In</div>
          <div className="album-type">Album</div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

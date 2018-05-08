import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1 className="App-title">a moosic player</h1>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/browse">Home</NavLink>
      <NavLink to="/collection">Your Music</NavLink>
      <h2>Recently Played</h2>
      <ul>
        <li>Unimagined</li>
        <li>Ground Dweller</li>
        <li>Before I Cave In</li>
      </ul>
    </nav>
  );
}

export default Navbar;

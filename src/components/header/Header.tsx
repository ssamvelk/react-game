import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/rules">Rules</NavLink></li>
        <li><NavLink to="/statistic">Statistic</NavLink></li>
        {/* <li><NavLink to="/contacts">Contacts</NavLink></li> */}
      </ul>
    </nav>
  </header>
);

export default Header;

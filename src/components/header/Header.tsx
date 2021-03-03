import React, { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  let rap;

  return (
    <header className="header">
      <nav>
        <ul className="nav">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/rules">Rules</NavLink></li>
          <li><NavLink to="/statistic">Statistic</NavLink></li>
        </ul>
      </nav>

      <ReactAudioPlayer
        src="assets/song2.mp3"
        className="header__song"
        loop
        // controlsList
        // autoPlay
        controls
        ref={(element) => { rap = element; }}
      />
    </header>
  );
};

export default Header;

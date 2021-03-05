import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import song from '../../assets/song2.mp3';

const Header = () => {
  let rap;

  return (
    <header className="header">
      <nav>
        <ul className="nav">
          {/* <li><NavLink exact to="/">Home</NavLink></li> */}
          <li><NavLink exact to="/react-game/">Home</NavLink></li>
          <li><NavLink to="/react-game/rules">Rules</NavLink></li>
          <li><NavLink to="/react-game/statistic">Statistic</NavLink></li>
        </ul>
      </nav>

      <ReactAudioPlayer
        src={song}
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

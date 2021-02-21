import React from 'react';
// import ReactDOM from 'react-dom';

// const Footer:React.FC<{ name: string }> = ({ name }) => <h1>{name}</h1>;

function Footer({ bar = '' }:{ bar:string }): JSX.Element {
  return (
    <footer className="footer">
      <span className="footer__info">
        <a href="https://github.com/ssamvelk">© ssamvelk,</a>
        <span> 2021г.</span>
      </span>
      <a href="https://rs.school/js/">
        <img className="footer__logo" src="assets/images/rs_school_js.svg" width="100px" alt="logo" />
      </a>
    </footer>
  );
}

export default Footer;

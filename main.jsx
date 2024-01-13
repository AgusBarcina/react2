import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const useNavItems = () => {
 const [navItems, setNavItems] = useState([]);

 useEffect(() => {
    fetch('/api/navItems')
      .then(res => res.json())
      .then(data => setNavItems(data));
 }, []);

 return navItems;
};

const Header = () => {
 const navItems = useNavItems();

 return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          MyApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navItems.map(item => (
              <li className="nav-item" key={item.id}>
                <Link className="nav-link" to={item.path}>
                 {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
 );
};

export default Header;

setupCounter(document.querySelector('#counter'))

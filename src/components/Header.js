import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__title" aria-label="CampusFlow home">
          <img src="/images/logo.png" alt="CampusFlow logo" />
          <h1>CampusFlow</h1>
        </Link>
        <nav aria-label="CampusFlow navigation">
          <Link to="/" className="header__nav-link">All Events</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

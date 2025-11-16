import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          Лабораторна робота №7
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Головна
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Про нас
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Послуги
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacts">
                Контакти
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
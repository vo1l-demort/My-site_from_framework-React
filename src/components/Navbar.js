import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Лабораторна робота №7🤙
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Головна
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Про мене
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Послуги
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Контакти
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                <i className="fas fa-user-plus me-1"></i>
                 Реєстрація
               </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
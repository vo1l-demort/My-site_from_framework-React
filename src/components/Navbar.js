import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg modern-navbar shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="brand-gradient">Лабораторна робота №7</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto flex-row justify-content-between w-100">
            <li className="nav-item">
              <Link className="nav-link nav-anim" to="/">
                <i className="fas fa-home me-1"></i>Головна
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-anim" to="/blog">
                <i className="fas fa-blog me-1"></i>Блог
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-anim" to="/gallery">
                <i className="fas fa-images me-1"></i>Галерея
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-anim" to="/about">
                <i className="fas fa-user me-1"></i>Про мене
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-anim" to="/team">
                <i className="fas fa-users me-1"></i>Команда
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-anim" to="/services">
                <i className="fas fa-briefcase me-1"></i>Послуги
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-anim" to="/contact">
                <i className="fas fa-envelope me-1"></i>Контакти
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-anim" to="/register">
                <i className="fas fa-user-plus me-1"></i>Реєстрація
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
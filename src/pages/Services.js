import React from 'react';

const Services = () => {
  return (
    <div className="container mt-5">
      <h2>Мої сервіси</h2>
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Розробка сайтів</h5>
              <p className="card-text">Створення сучасних, адаптивних та швидких веб-сайтів для бізнесу та особистих потреб.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">UI/UX дизайн</h5>
              <p className="card-text">Дизайн інтерфейсів, що приваблюють користувачів та забезпечують зручність використання.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Технічна підтримка</h5>
              <p className="card-text">Супровід, оновлення та підтримка ваших веб-проєктів на всіх етапах.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from 'react';
import './HomeCarousel.css';

const Home = () => {
  return (
    <div>
      <div id="mainCarousel" className="carousel slide shadow-lg rounded" data-bs-ride="carousel" style={{maxWidth: '1200px', margin: '40px auto 0 auto', overflow: 'hidden'}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" 
                className="d-block w-100 carousel-img" 
                alt="Ласкаво просимо"
              />
              <div className="carousel-caption-card">
                <h5>Ласкаво просимо на мій сайт</h5>
                <p>Найкращі рішення для вашого бізнесу</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80" 
                className="d-block w-100 carousel-img" 
                alt="Якісні послуги"
              />
              <div className="carousel-caption-card">
                <h5>Професійні послуги</h5>
                <p>Ми пропонуємо високоякісні рішення</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" 
                className="d-block w-100 carousel-img" 
                alt="Мої досягнення"
              />
              <div className="carousel-caption-card">
                <h5>Мої досягнення</h5>
                <p>Понад 1-100 задоволених клієнтів</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Попередній</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Наступний</span>
        </button>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Інновації</h5>
                <p className="card-text">Я використовую сучасні технології для досягнення найкращих результатів.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Якість</h5>
                <p className="card-text">Гарантую високу якість всіх надаваних послуг та рішень.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Підтримка</h5>
                <p className="card-text">Надаю постійну підтримку та консультації для наших клієнтів.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
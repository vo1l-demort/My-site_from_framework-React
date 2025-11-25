import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page bg-gradient">
      {/* Hero Section */}
      <section className="about-hero d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Про нашу команду</h1>
          <p className="lead mb-4">
            Ми створюємо сучасні веб-рішення з 2018 року, поєднуючи креативність, досвід і технології.
          </p>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 text-center text-lg-start mt-4 mt-lg-0">
              <h2 className="section-title mb-4">Наша історія</h2>
              <p className="mb-4">
                З 2018 року ми допомагаємо бізнесу зростати в інтернеті. Наша команда — це експерти з різних сфер IT, які об'єдналися заради спільної мети: створювати якісні, сучасні та ефективні продукти.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start gap-4 mb-4">
                <div>
                  <div className="stat-number h3 text-primary fw-bold">5+</div>
                  <div className="stat-label">Років досвіду</div>
                </div>
                <div>
                  <div className="stat-number h3 text-primary fw-bold">150+</div>
                  <div className="stat-label">Проектів</div>
                </div>
                <div>
                  <div className="stat-number h3 text-primary fw-bold">98%</div>
                  <div className="stat-label">Задоволених клієнтів</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Наша команда" 
                className="img-fluid rounded shadow-lg about-main-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Наші цінності</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="value-card card h-100 border-0 shadow-sm text-center p-4">
                <div className="value-icon mb-3">
                  <i className="bi bi-people-fill text-primary" style={{fontSize: '2.5rem'}}></i>
                </div>
                <h5 className="card-title">Командна робота</h5>
                <p className="card-text">Ми віримо у силу співпраці та відкритої комунікації між усіма членами команди.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="value-card card h-100 border-0 shadow-sm text-center p-4">
                <div className="value-icon mb-3">
                  <i className="bi bi-lightbulb-fill text-success" style={{fontSize: '2.5rem'}}></i>
                </div>
                <h5 className="card-title">Інновації</h5>
                <p className="card-text">Постійно вдосконалюємо наші процеси та вивчаємо нові технології для клієнтів.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="value-card card h-100 border-0 shadow-sm text-center p-4">
                <div className="value-icon mb-3">
                  <i className="bi bi-shield-check text-info" style={{fontSize: '2.5rem'}}></i>
                </div>
                <h5 className="card-title">Надійність</h5>
                <p className="card-text">Дотримуємося дедлайнів та гарантуємо якість виконаної роботи.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Наша команда</h2>
          <div className="text-center mt-4 mb-5">
            <Link to="/team" className="btn btn-primary btn-lg team-btn">
              Переглянути всю команду
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">Наші Досягнення</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-6 text-center mb-4">
              <div className="achievement-item">
                <div className="achievement-icon mb-3">
                  <i className="fas fa-trophy fa-2x text-warning"></i>
                </div>
                <h4 className="achievement-number">15+</h4>
                <p className="achievement-label">Нагород та відзнак</p>
              </div>
            </div>
            <div className="col-md-3 col-6 text-center mb-4">
              <div className="achievement-item">
                <div className="achievement-icon mb-3">
                  <i className="fas fa-globe-europe fa-2x text-primary"></i>
                </div>
                <h4 className="achievement-number">25+</h4>
                <p className="achievement-label">Країн роботи</p>
              </div>
            </div>
          
            <div className="col-md-3 col-6 text-center mb-4">
              <div className="achievement-item">
                <div className="achievement-icon mb-3">
                  <i className="fas fa-users fa-2x text-success"></i>
                </div>
                <h4 className="achievement-number">150+</h4>
                <p className="achievement-label">Задоволених клієнтів</p>
              </div>
            </div>
            <div className="col-md-3 col-6 text-center mb-4">
              <div className="achievement-item">
                <div className="achievement-icon mb-3">
                  <i className="fas fa-project-diagram fa-2x text-info"></i>
                </div>
                <h4 className="achievement-number">200+</h4>
                <p className="achievement-label">Успішних проектів</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="mb-4">Готові розпочати проект разом з нами?</h2>
          <p className="lead mb-4">Зв'яжіться з нами вже сьогодні та отримайте безкоштовну консультацію</p>
          <a href="/contact" className="btn btn-light btn-lg px-5">Зв'язатися</a>
        </div>
      </section>
    </div>
  );
};

export default About;
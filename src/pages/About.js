import React from 'react';
import './About.css';

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
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="team-card card border-0 shadow-sm text-center p-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
                  className="card-img-top team-img mx-auto mb-3" 
                  alt="Team Member"
                />
                <h5 className="card-title">Олександр Коваленко</h5>
                <p className="text-muted mb-3">Frontend Developer</p>
                <p className="card-text">Спеціалізується на React та сучасному JavaScript. Має досвід роботи з великими проектами.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="team-card card border-0 shadow-sm text-center p-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  className="card-img-top team-img mx-auto mb-3" 
                  alt="Team Member"
                />
                <h5 className="card-title">Марія Петренко</h5>
                <p className="text-muted mb-3">UI/UX Designer</p>
                <p className="card-text">Створює зручні та естетичні інтерфейси. Працювала з міжнародними брендами.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="team-card card border-0 shadow-sm text-center p-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" 
                  className="card-img-top team-img mx-auto mb-3" 
                  alt="Team Member"
                />
                <h5 className="card-title">Андрій Шевченко</h5>
                <p className="text-muted mb-3">Backend Developer</p>
                <p className="card-text">Експерт у Node.js та базах даних. Відповідає за архітектуру серверної частини.</p>
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
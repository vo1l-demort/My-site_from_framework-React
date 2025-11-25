import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div id="mainCarousel" className="carousel slide shadow-lg rounded" data-bs-ride="carousel">
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
                  <p>Понад 100 задоволених клієнтів</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">Наші Переваги</h2>
              <p className="section-subtitle">Чому обирають саме нас</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-card card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-lightbulb fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title">Інновації</h5>
                  <p className="card-text">Я використовую сучасні технології для досягнення найкращих результатів у всіх проектах.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-award fa-3x text-success"></i>
                  </div>
                  <h5 className="card-title">Якість</h5>
                  <p className="card-text">Гарантую високу якість всіх надаваних послуг та рішень з довгостроковою підтримкою.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-headset fa-3x text-info"></i>
                  </div>
                  <h5 className="card-title">Підтримка</h5>
                  <p className="card-text">Надаю постійну підтримку та консультації для клієнтів на всіх етапах співпраці.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Про нас" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Про Нас</h2>
              <p className="lead">
                Ми - команда професіоналів, яка спеціалізується на створенні сучасних веб-рішень.
              </p>
              <p>
                Наш досвід роботи у сфері веб-розробки налічує понад 5 років. 
                Ми створюємо якісні та функціональні сайти, які відповідають сучасним вимогам.
              </p>
              <p>
                Наша місія - допомагати бізнесу розвиватися в інтернеті, надаючи 
                інноваційні технологічні рішення.
              </p>
              <button className="btn btn-primary btn-lg mt-3">Дізнатися більше</button>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">Наші Послуги</h2>
              <p className="section-subtitle">Що ми пропонуємо</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="service-card card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-3">
                    <i className="fas fa-laptop-code fa-2x text-primary"></i>
                  </div>
                  <h5 className="card-title">Веб-розробка</h5>
                  <p className="card-text">Створення сучасних веб-сайтів та веб-додатків з використанням React.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="service-card card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-3">
                    <i className="fas fa-mobile-alt fa-2x text-success"></i>
                  </div>
                  <h5 className="card-title">Адаптивний дизайн</h5>
                  <p className="card-text">Сайти, які ідеально відображаються на всіх пристроях та екранах.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="service-card card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-3">
                    <i className="fas fa-paint-brush fa-2x text-info"></i>
                  </div>
                  <h5 className="card-title">UI/UX Дизайн</h5>
                  <p className="card-text">Створення зручних та естетичних інтерфейсів для користувачів.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="service-card card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-3">
                    <i className="fas fa-rocket fa-2x text-warning"></i>
                  </div>
                  <h5 className="card-title">Оптимізація</h5>
                  <p className="card-text">Покращення швидкості та продуктивності існуючих веб-сайтів.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section py-5">
        <div className="container-fluid px-4">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">Наші Останні Проекти</h2>
              <p className="section-subtitle">Реалізовані рішення для клієнтів</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="project-card card border-0 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="E-commerce проект"
                  className="project-image"
                />
                <div className="card-body p-4">
                  <h5 className="card-title">Інтернет-магазин техніки</h5>
                  <p className="card-text">Повний цикл розробки e-commerce платформи з інтеграцією платіжних систем</p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card card border-0 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                  alt="Landing Page проект"
                  className="project-image"
                />
                <div className="card-body p-4">
                  <h5 className="card-title">Landing Page для стартапу</h5>
                  <p className="card-text">Яскравий лендинг для презентації нового продукту</p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Bootstrap</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-card card border-0 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80" 
                  alt="Корпоративний сайт"
                  className="project-image"
                />
                <div className="card-body p-4">
                  <h5 className="card-title">Корпоративний сайт</h5>
                  <p className="card-text">Розробка корпоративного сайту для компанії з унікальним дизайном</p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Sass</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section py-5 bg-light">
        <div className="container-fluid px-4">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">Відгуки Клієнтів</h2>
              <p className="section-subtitle">Що говорять про співпрацю з нами</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="table-responsive">
                <table className="table table-bordered table-striped align-middle bg-white">
                  <thead className="table-primary">
                    <tr>
                      <th>Користувач</th>
                      <th>Посада / Компанія</th>
                      <th>Відгук</th>
                      <th>Оцінка</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Олена Коваль</strong></td>
                      <td>Директор, TechSolutions</td>
                      <td>Команда професіоналів! Створили для нас сайт, який перевершив усі очікування. Швидко, якісно, з урахуванням всіх побажань.</td>
                      <td>{'★'.repeat(5)}</td>
                    </tr>
                    <tr>
                      <td><strong>Ігор Мельник</strong></td>
                      <td>Менеджер, StartUpPro</td>
                      <td>Дуже задоволені співпрацею! Все було зроблено вчасно і на найвищому рівні.</td>
                      <td>{'★'.repeat(5)}</td>
                    </tr>
                    <tr>
                      <td><strong>Марія Литвин</strong></td>
                      <td>Підприємець</td>
                      <td>Відмінний сервіс та підтримка! Рекомендуємо цю команду всім, хто шукає якісну розробку.</td>
                      <td>{'★'.repeat(4)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">Зв'яжіться з Нами</h2>
              <p className="section-subtitle">Ми завжди раді новим проектам</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow">
                <div className="card-body p-5">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Ім'я</label>
                        <input type="text" className="form-control" id="name" required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Тема</label>
                      <input type="text" className="form-control" id="subject" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Повідомлення</label>
                      <textarea className="form-control" id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Надіслати повідомлення</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import './Home.css';

const Home = ({ lang }) => {
  const translations = {
    ua: {
      hero: {
        slide1: { title: "Ласкаво просимо на мій сайт", desc: "Найкращі рішення для вашого бізнесу" },
        slide2: { title: "Професійні послуги", desc: "Ми пропонуємо високоякісні рішення" },
        slide3: { title: "Мої досягнення", desc: "Понад 100 задоволених клієнтів" },
      },
      features: {
        title: "Наші Переваги",
        subtitle: "Чому обирають саме нас",
        innovation: { title: "Інновації", text: "Я використовую сучасні технології для досягнення найкращих результатів у всіх проектах." },
        quality: { title: "Якість", text: "Гарантую високу якість всіх надаваних послуг та рішень з довгостроковою підтримкою." },
        support: { title: "Підтримка", text: "Надаю постійну підтримку та консультації для клієнтів на всіх етапах співпраці." },
      },
      about: {
        title: "Про Нас",
        text1: "Ми - команда професіоналів, яка спеціалізується на створенні сучасних веб-рішень.",
        text2: "Наш досвід роботи у сфері веб-розробки налічує понад 5 років. Ми створюємо якісні та функціональні сайти.",
        text3: "Наша місія - допомагати бізнесу розвиватися в інтернеті.",
        btn: "Дізнатися більше"
      },
      services: { title: "Наші Послуги", subtitle: "Що ми пропонуємо" },
      contact: { title: "Зв'яжіться з Нами", subtitle: "Ми завжди раді новим проектам" }
    },
    en: {
      hero: {
        slide1: { title: "Welcome to my website", desc: "The best solutions for your business" },
        slide2: { title: "Professional Services", desc: "We offer high-quality solutions" },
        slide3: { title: "My Achievements", desc: "Over 100 satisfied clients" },
      },
      features: {
        title: "Our Advantages",
        subtitle: "Why choose us",
        innovation: { title: "Innovation", text: "I use modern technologies to achieve the best results in all projects." },
        quality: { title: "Quality", text: "I guarantee high quality of all provided services and solutions with long-term support." },
        support: { title: "Support", text: "I provide constant support and consultations for clients at all stages of cooperation." },
      },
      about: {
        title: "About Us",
        text1: "We are a team of professionals specializing in creating modern web solutions.",
        text2: "Our experience in web development spans over 5 years. We create quality and functional websites.",
        text3: "Our mission is to help businesses grow online.",
        btn: "Learn more"
      },
      services: { title: "Our Services", subtitle: "What we offer" },
      contact: { title: "Contact Us", subtitle: "We are always happy to start new projects" },
      projects: {
        title: "Our Latest Projects",
        subtitle: "Implemented solutions for clients",
        items: [
          {
            title: "Electronics Online Store",
            desc: "Full cycle development of an e-commerce platform with payment integration",
            tech: ["React", "Node.js", "MongoDB"]
          },
          {
            title: "Startup Landing Page",
            desc: "Bright landing page for presenting a new product",
            tech: ["React", "Bootstrap"]
          },
          {
            title: "Corporate Website",
            desc: "Development of a corporate website for a company with unique design",
            tech: ["React", "Sass"]
          }
        ]
      },
      testimonials: {
        title: "Client Reviews",
        subtitle: "What clients say about working with us",
        items: [
          {
            user: "Olena Koval",
            position: "Director, TechSolutions",
            review: "Professional team! They created a website for us that exceeded all expectations. Fast, high-quality, with all wishes considered.",
            rating: 5
          },
          {
            user: "Ihor Melnyk",
            position: "Manager, StartUpPro",
            review: "Very satisfied with the cooperation! Everything was done on time and at the highest level.",
            rating: 5
          },
          {
            user: "Maria Lytvyn",
            position: "Entrepreneur",
            review: "Excellent service and support! We recommend this team to everyone looking for quality development.",
            rating: 4
          }
        ]
      },
      contactForm: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message"
      }
    }
  };

  const t = translations[lang];

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
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 carousel-img" alt="Slide 1"/>
                <div className="carousel-caption-card">
                  <h5>{t.hero.slide1.title}</h5>
                  <p>{t.hero.slide1.desc}</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img-wrapper">
                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 carousel-img" alt="Slide 2"/>
                <div className="carousel-caption-card">
                  <h5>{t.hero.slide2.title}</h5>
                  <p>{t.hero.slide2.desc}</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img-wrapper">
                <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 carousel-img" alt="Slide 3"/>
                <div className="carousel-caption-card">
                  <h5>{t.hero.slide3.title}</h5>
                  <p>{t.hero.slide3.desc}</p>
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
              <h2 className="section-title">{t.features.title}</h2>
              <p className="section-subtitle">{t.features.subtitle}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-card card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3"><i className="fas fa-lightbulb fa-3x text-primary"></i></div>
                  <h5 className="card-title">{t.features.innovation.title}</h5>
                  <p className="card-text">{t.features.innovation.text}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3"><i className="fas fa-award fa-3x text-success"></i></div>
                  <h5 className="card-title">{t.features.quality.title}</h5>
                  <p className="card-text">{t.features.quality.text}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3"><i className="fas fa-headset fa-3x text-info"></i></div>
                  <h5 className="card-title">{t.features.support.title}</h5>
                  <p className="card-text">{t.features.support.text}</p>
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
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="About" className="img-fluid rounded shadow"/>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">{t.about.title}</h2>
              <p className="lead">{t.about.text1}</p>
              <p>{t.about.text2}</p>
              <p>{t.about.text3}</p>
              <button className="btn btn-primary btn-lg mt-3">{t.about.btn}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">{t.services.title}</h2>
              <p className="section-subtitle">{t.services.subtitle}</p>
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
              <h2 className="section-title">{t.projects ? t.projects.title : "Наші Останні Проекти"}</h2>
              <p className="section-subtitle">{t.projects ? t.projects.subtitle : "Реалізовані рішення для клієнтів"}</p>
            </div>
          </div>
          <div className="row g-4">
            {(t.projects && t.projects.items ? t.projects.items : [
              {
                title: "Інтернет-магазин техніки",
                desc: "Повний цикл розробки e-commerce платформи з інтеграцією платіжних систем",
                tech: ["React", "Node.js", "MongoDB"]
              },
              {
                title: "Landing Page для стартапу",
                desc: "Яскравий лендинг для презентації нового продукту",
                tech: ["React", "Bootstrap"]
              },
              {
                title: "Корпоративний сайт",
                desc: "Розробка корпоративного сайту для компанії з унікальним дизайном",
                tech: ["React", "Sass"]
              }
            ]).map((project, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="project-card card border-0 shadow-sm">
                  <img 
                    src={idx === 0 ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" : idx === 1 ? "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" : "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80"}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="card-body p-4">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.desc}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, i) => (
                        <span className="tech-tag" key={i}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section py-5 bg-light">
        <div className="container-fluid px-4">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">{t.testimonials ? t.testimonials.title : "Відгуки Клієнтів"}</h2>
              <p className="section-subtitle">{t.testimonials ? t.testimonials.subtitle : "Що говорять про співпрацю з нами"}</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="table-responsive">
                <table className="table table-bordered table-striped align-middle bg-white">
                  <thead className="table-primary">
                    <tr>
                      <th>{lang === 'en' ? 'User' : 'Користувач'}</th>
                      <th>{lang === 'en' ? 'Position / Company' : 'Посада / Компанія'}</th>
                      <th>{lang === 'en' ? 'Review' : 'Відгук'}</th>
                      <th>{lang === 'en' ? 'Rating' : 'Оцінка'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(t.testimonials && t.testimonials.items ? t.testimonials.items : [
                      {
                        user: "Олена Коваль",
                        position: "Директор, TechSolutions",
                        review: "Команда професіоналів! Створили для нас сайт, який перевершив усі очікування. Швидко, якісно, з урахуванням всіх побажань.",
                        rating: 5
                      },
                      {
                        user: "Ігор Мельник",
                        position: "Менеджер, StartUpPro",
                        review: "Дуже задоволені співпрацею! Все було зроблено вчасно і на найвищому рівні.",
                        rating: 5
                      },
                      {
                        user: "Марія Литвин",
                        position: "Підприємець",
                        review: "Відмінний сервіс та підтримка! Рекомендуємо цю команду всім, хто шукає якісну розробку.",
                        rating: 4
                      }
                    ]).map((item, idx) => (
                      <tr key={idx}>
                        <td><strong>{item.user}</strong></td>
                        <td>{item.position}</td>
                        <td>{item.review}</td>
                        <td>{'★'.repeat(item.rating)}</td>
                      </tr>
                    ))}
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
              <h2 className="section-title">{t.contact.title}</h2>
              <p className="section-subtitle">{t.contact.subtitle}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow">
                <div className="card-body p-5">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">{t.contactForm ? t.contactForm.name : "Ім'я"}</label>
                        <input type="text" className="form-control" id="name" required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">{t.contactForm ? t.contactForm.email : "Email"}</label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">{t.contactForm ? t.contactForm.subject : "Тема"}</label>
                      <input type="text" className="form-control" id="subject" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">{t.contactForm ? t.contactForm.message : "Повідомлення"}</label>
                      <textarea className="form-control" id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">{t.contactForm ? t.contactForm.send : "Надіслати повідомлення"}</button>
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
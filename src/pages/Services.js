import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const servicesData = {
    web: [
      {
        id: 1,
        title: "Розробка веб-сайтів",
        description: "Створення сучасних, адаптивних веб-сайтів з використанням React та сучасних технологій",
        price: "від 15 000 грн",
        duration: "2-4 тижні",
        features: ["Адаптивний дизайн", "SEO оптимізація", "Адмін панель", "Технічна підтримка"],
        popular: true
      },
      {
        id: 2,
        title: "Інтернет-магазин",
        description: "Повноцінний e-commerce проект з корзиною, оплатою та системою управління товарами",
        price: "від 25 000 грн",
        duration: "4-6 тижнів",
        features: ["Система оплати", "Каталог товарів", "Кошик покупок", "Звіти та аналітика"]
      }
    ],
    design: [
      {
        id: 3,
        title: "UI/UX Дизайн",
        description: "Створення зручних та естетичних інтерфейсів з продуманим користувацьким досвідом",
        price: "від 8 000 грн",
        duration: "1-2 тижні",
        features: ["Прототипування", "Дизайн системи", "Адаптація під пристрої", "Гайдлайни"]
      },
      {
        id: 4,
        title: "Графічний дизайн",
        description: "Розробка фірмового стилю, логотипів та візуальної ідентифікації бренду",
        price: "від 5 000 грн",
        duration: "1 тиждень",
        features: ["Логотип", "Фірмовий стиль", "Брендбук", "Мокапи"]
      }
    ],
    marketing: [
      {
        id: 5,
        title: "SEO Оптимізація",
        description: "Покращення позицій сайту в пошукових системах та збільшення органічного трафіку",
        price: "від 6 000 грн/міс",
        duration: "постійно",
        features: ["Аудит сайту", "Ключові слова", "Контент стратегія", "Моніторинг"],
        popular: true
      },
      {
        id: 6,
        title: "SMM Просування",
        description: "Комплексне просування бренду в соціальних мережах та робота з цільовою аудиторією",
        price: "від 8 000 грн/міс",
        duration: "постійно",
        features: ["Контент план", "Таргетована реклама", "Аналітика", "Ком'юніті менеджмент"]
      }
    ],
    mobile: [
      {
        id: 7,
        title: "Розробка мобільних додатків",
        description: "Створення нативних та крос-платформних мобільних додатків для iOS та Android",
        price: "від 30 000 грн",
        duration: "6-8 тижнів",
        features: ["UI/UX дизайн", "Тестування", "Публікація в сторах", "Підтримка"],
        popular: true
      }
    ]
  };

  const allServices = [...servicesData.web, ...servicesData.design, ...servicesData.marketing];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : servicesData[activeCategory];

  return (
    <div className="services-page">
      <section className="services-hero bg-gradient-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Наші Послуги</h1>
              <p className="lead mb-0">
                Комплексні рішення для вашого бізнесу - від ідеї до впровадження
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2 className="section-title mb-4">Оберіть Категорію</h2>
              <div className="categories-filter">
                <button 
                  className={`btn btn-outline-primary mx-2 mb-2 ${activeCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('all')}
                >
                  Всі Послуги
                </button>
                <button 
                  className={`btn btn-outline-primary mx-2 mb-2 ${activeCategory === 'web' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('web')}
                >
                  Веб-розробка
                </button>
                <button 
                  className={`btn btn-outline-primary mx-2 mb-2 ${activeCategory === 'design' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('design')}
                >
                  Дизайн
                </button>
                <button 
                  className={`btn btn-outline-primary mx-2 mb-2 ${activeCategory === 'marketing' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('marketing')}
                >
                  Маркетинг
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-list py-5 bg-light">
        <div className="container">
          <div className="row">
            {filteredServices.map(service => (
              <div key={service.id} className="col-lg-6 mb-4">
                <div className={`service-item card h-100 border-0 shadow-sm position-relative ${service.popular ? 'popular' : ''}`}>
                  {service.popular && (
                    <div className="popular-badge">
                      <span>Популярно</span>
                    </div>
                  )}
                  <div className="card-body p-4">
                    <div className="service-header mb-3">
                      <h4 className="service-title mb-2">{service.title}</h4>
                      <p className="service-description text-muted mb-3">{service.description}</p>
                    </div>
                    
                    <div className="service-details mb-4">
                      <div className="row text-center">
                        <div className="col-6">
                          <div className="detail-item">
                            <i className="fas fa-tag text-primary mb-2"></i>
                            <div className="detail-value fw-bold">{service.price}</div>
                            <div className="detail-label text-muted">Вартість</div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="detail-item">
                            <i className="fas fa-clock text-primary mb-2"></i>
                            <div className="detail-value fw-bold">{service.duration}</div>
                            <div className="detail-label text-muted">Термін</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="service-features mb-4">
                      <h6 className="mb-3">Що включено:</h6>
                      <ul className="list-unstyled">
                        {service.features.map((feature, index) => (
                          <li key={index} className="mb-2">
                            <i className="fas fa-check text-success me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-actions text-center">
                      <button className="btn btn-primary btn-lg w-100">
                        Замовити послугу
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">Як Ми Працюємо</h2>
              <p className="section-subtitle">Чіткий процес для досягнення найкращих результатів</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="process-step text-center">
                <div className="step-number">1</div>
                <h5 className="step-title mt-3">Консультація</h5>
                <p className="step-description">
                  Аналізуємо ваші потреби та цілі, пропонуємо оптимальні рішення
                </p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="process-step text-center">
                <div className="step-number">2</div>
                <h5 className="step-title mt-3">Планування</h5>
                <p className="step-description">
                  Розробляємо детальний план проекту з етапами та термінами
                </p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="process-step text-center">
                <div className="step-number">3</div>
                <h5 className="step-title mt-3">Реалізація</h5>
                <p className="step-description">
                  Створюємо продукт з дотриманням всіх вимог та стандартів якості
                </p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="process-step text-center">
                <div className="step-number">4</div>
                <h5 className="step-title mt-3">Підтримка</h5>
                <p className="step-description">
                  Надаємо технічну підтримку та супровід після запуску проекту
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center mb-5">
                <h2 className="section-title">Часті Питання</h2>
                <p className="section-subtitle">Відповіді на найпопулярніші запитання</p>
              </div>
              
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      Скільки часу займає розробка сайту?
                    </button>
                  </h3>
                  <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Час розробки залежить від складності проекту. Простий сайт-візитка - 2-3 тижні, інтернет-магазин - 4-6 тижнів, складний веб-додаток - від 2 місяців.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Чи надаєте ви гарантію на роботу?
                    </button>
                  </h3>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Так, ми надаємо гарантію 6 місяців на всі розроблені сайти. У рамках гарантії виправляємо всі виявлені помилки безкоштовно.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Чи можна замовити окремі послуги?
                    </button>
                  </h3>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Звичайно! Ви можете замовити як комплексне рішення, так і окремі послуги: лише дизайн, лише розробку або лише SEO оптимізацію.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section py-5 bg-gradient-primary text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">Готові розпочати проект?</h2>
              <p className="lead mb-4">
                Зв'яжіться з нами для безкоштовної консультації та розрахунку вартості вашого проекту
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-light btn-lg px-5 me-3">
                  Отримати консультацію
                </a>
                <a href="tel:+38098773215" className="btn btn-outline-light btn-lg px-5">
                  Зателефонувати
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: '',
    subscribe: false
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (touched[name]) {
      const fieldErrors = validateField(name, type === 'checkbox' ? checked : value);
      if (fieldErrors) {
        setErrors(prev => ({ ...prev, [name]: fieldErrors }));
      } else {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const fieldErrors = validateField(name, formData[name]);
    if (fieldErrors) {
      setErrors(prev => ({ ...prev, [name]: fieldErrors }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        if (!value.trim()) return "Ім'я обов'язкове";
        if (value.trim().length < 2) return "Ім'я має містити щонайменше 2 символи";
        return null;

      case 'email':
        if (!value.trim()) return "Email обов'язковий";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Невірний формат email";
        return null;

      case 'subject':
        if (!value.trim()) return "Тема повідомлення обов'язкова";
        if (value.trim().length < 5) return "Тема має містити щонайменше 5 символів";
        return null;

      case 'message':
        if (!value.trim()) return "Повідомлення обов'язкове";
        if (value.trim().length < 10) return "Повідомлення має містити щонайменше 10 символів";
        if (value.trim().length > 1000) return "Повідомлення не може перевищувати 1000 символів";
        return null;

      default:
        return null;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    Object.keys(formData).forEach(fieldName => {
      if (fieldName !== 'subscribe' && fieldName !== 'category') {
        const error = validateField(fieldName, formData[fieldName]);
        if (error) {
          newErrors[fieldName] = error;
        }
      }
    });

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('Дані форми зворотного зв\'язку:', {
          ...formData,
          timestamp: new Date().toISOString()
        });

        setSubmitStatus('success');

        setFormData({
          name: '',
          email: '',
          subject: '',
          category: 'general',
          message: '',
          subscribe: false
        });
        setTouched({});

      } catch (error) {
        console.error('Помилка відправки форми:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
      const firstErrorField = Object.keys(formErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
    }
  };

  const characterCount = formData.message.length;

  return (
    <div className="contact-page">
      <section className="contact-hero bg-gradient-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Зв'яжіться з нами</h1>
              <p className="lead mb-0">
                Маєте запитання? Ми завжди раді допомогти та відповісти на всі ваші запитання
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="contact-info">
                <h2 className="section-title mb-4">Наші Контакти</h2>
                
                <div className="contact-item mb-4">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Адреса</h5>
                    <p>м. Черкаси, вул. Незалежності, 1</p>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Телефон</h5>
                    <p>+380 (68) 071-12-38</p>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Email</h5>
                    <p>volodumursalpuk@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Години роботи</h5>
                    <p>Пн-Пт: 9:00 - 18:00<br/>Сб-Нд: Вихідний</p>
                  </div>
                </div>

                <div className="social-links mt-4">
                  <h5 className="mb-3">Соціальні мережі</h5>
                  <div className="d-flex gap-3">
                    <a href="#" className="social-link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-form-card card border-0 shadow-lg">
                <div className="card-body p-4 p-md-5">
                  <h2 className="section-title mb-4">Форма зворотного зв'язку</h2>
                  
                  {submitStatus === 'success' && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      <i className="fas fa-check-circle me-2"></i>
                      Ваше повідомлення успішно відправлено! Ми зв'яжемося з вами найближчим часом.
                      <button type="button" className="btn-close" onClick={() => setSubmitStatus(null)}></button>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                      <i className="fas fa-exclamation-circle me-2"></i>
                      Сталася помилка при відправці повідомлення. Спробуйте ще раз.
                      <button type="button" className="btn-close" onClick={() => setSubmitStatus(null)}></button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">
                          Ваше ім'я <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Введіть ваше ім'я"
                        />
                        {errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                          Email адреса <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="subject" className="form-label">
                          Тема повідомлення <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Короткий опис вашого запитання"
                        />
                        {errors.subject && (
                          <div className="invalid-feedback">{errors.subject}</div>
                        )}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="category" className="form-label">
                          Категорія запитання
                        </label>
                        <select
                          className="form-select"
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                        >
                          <option value="general">Загальне питання</option>
                          <option value="technical">Технічна підтримка</option>
                          <option value="sales">Питання продажів</option>
                          <option value="partnership">Співпраця</option>
                          <option value="other">Інше</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Ваше повідомлення <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Опишіть ваше питання детально..."
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                      <div className="form-text text-end">
                        {characterCount}/1000 символів
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="subscribe"
                          name="subscribe"
                          checked={formData.subscribe}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="subscribe">
                          Підписатися на розсилку новин та акцій
                        </label>
                      </div>
                    </div>

                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Відправка...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i>
                            Надіслати повідомлення
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-title text-center mb-5">Ми на карті</h2>
              <div className="map-placeholder card border-0 shadow">
                <div className="card-body text-center p-5">
                  <i className="fas fa-map-marked-alt fa-3x text-primary mb-3"></i>
                  <h5>Інтерактивна карта</h5>
                  <p className="text-muted mb-0">Тут буде розміщено карту з нашим розташуванням</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
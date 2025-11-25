import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Ім'я обов'язкове";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Прізвище обов'язкове";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email обов'язковий";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Невірний формат email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Телефон обов'язковий";
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Невірний формат телефону";
    }

    if (!formData.password) {
      newErrors.password = "Пароль обов'язковий";
    } else if (formData.password.length < 6) {
      newErrors.password = "Пароль має містити щонайменше 6 символів";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Підтвердження паролю обов'язкове";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Паролі не співпадають";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "Ви повинні погодитись з умовами";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Дані форми:', formData);
        alert('Реєстрація успішна! Перевірте вашу email пошту для підтвердження.');
        
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          agreeToTerms: false
        });
      } catch (error) {
        console.error('Помилка реєстрації:', error);
        alert('Сталася помилка. Спробуйте ще раз.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="register-page">
      <section className="register-hero bg-gradient-primary text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-5 fw-bold mb-3">Реєстрація</h1>
              <p className="lead mb-0">Створіть обліковий запис для доступу до всіх можливостей</p>
            </div>
          </div>
        </div>
      </section>

      <section className="register-form-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="register-card card border-0 shadow-lg">
                <div className="card-body p-4 p-md-5">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">
                          Ім'я <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Введіть ваше ім'я"
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback">{errors.firstName}</div>
                        )}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">
                          Прізвище <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Введіть ваше прізвище"
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback">{errors.lastName}</div>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
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
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Номер телефону <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+380 (XX) XXX-XX-XX"
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">{errors.phone}</div>
                      )}
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="password" className="form-label">
                          Пароль <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Мінімум 6 символів"
                        />
                        {errors.password && (
                          <div className="invalid-feedback">{errors.password}</div>
                        )}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="confirmPassword" className="form-label">
                          Підтвердження паролю <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Повторіть пароль"
                        />
                        {errors.confirmPassword && (
                          <div className="invalid-feedback">{errors.confirmPassword}</div>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className={`form-check-input ${errors.agreeToTerms ? 'is-invalid' : ''}`}
                          type="checkbox"
                          id="agreeToTerms"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="agreeToTerms">
                          Я погоджуюсь з <Link to="/terms" className="text-primary">умовами використання</Link> та <Link to="/privacy" className="text-primary">політикою конфіденційності</Link>
                        </label>
                        {errors.agreeToTerms && (
                          <div className="invalid-feedback d-block">{errors.agreeToTerms}</div>
                        )}
                      </div>
                    </div>

                    <div className="d-grid mb-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Обробка...
                          </>
                        ) : (
                          'Зареєструватися'
                        )}
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="mb-0">
                        Вже маєте акаунт? <Link to="/login" className="text-primary fw-bold">Увійти</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              <div className="additional-info mt-4">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="info-card text-center p-3">
                      <i className="fas fa-shield-alt fa-2x text-primary mb-2"></i>
                      <h6>Безпека даних</h6>
                      <p className="small mb-0">Ваші дані надійно захищені</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="info-card text-center p-3">
                      <i className="fas fa-bolt fa-2x text-primary mb-2"></i>
                      <h6>Швидка реєстрація</h6>
                      <p className="small mb-0">Процес займає менше хвилини</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="info-card text-center p-3">
                      <i className="fas fa-headset fa-2x text-primary mb-2"></i>
                      <h6>Підтримка 24/7</h6>
                      <p className="small mb-0">Завжди готові допомогти</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
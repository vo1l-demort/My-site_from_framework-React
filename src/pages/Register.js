import React, { useState, useEffect } from 'react';
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
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  useEffect(() => {
    if (touched.password && formData.password) {
      validatePasswordStrength(formData.password);
    }
  }, [formData.password, touched.password]);

  const validatePasswordStrength = (password) => {
    let strength = '';
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (strongRegex.test(password)) {
      strength = 'strong';
    } else if (mediumRegex.test(password)) {
      strength = 'medium';
    } else if (password.length >= 6) {
      strength = 'weak';
    } else {
      strength = 'very-weak';
    }
    setPasswordStrength(strength);
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 'strong':
        return { text: 'Сильний пароль', color: 'success' };
      case 'medium':
        return { text: 'Середній пароль', color: 'warning' };
      case 'weak':
        return { text: 'Слабкий пароль', color: 'danger' };
      case 'very-weak':
        return { text: 'Дуже слабкий пароль', color: 'danger' };
      default:
        return { text: '', color: '' };
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if ((name === 'email' || name === 'phone') && touched[name]) {
      const fieldErrors = validateField(name, value);
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

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'firstName':
        if (!value.trim()) return "Ім'я обов'язкове";
        if (value.trim().length < 2) return "Ім'я має містити щонайменше 2 символи";
        if (!/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'\-\s]+$/.test(value)) return "Ім'я може містити лише літери, апостроф та дефіс";
        return null;

      case 'lastName':
        if (!value.trim()) return "Прізвище обов'язкове";
        if (value.trim().length < 2) return "Прізвище має містити щонайменше 2 символи";
        if (!/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'\-\s]+$/.test(value)) return "Прізвище може містити лише літери, апостроф та дефіс";
        return null;

      case 'email':
        if (!value.trim()) return "Email обов'язковий";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Невірний формат email";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "Email має бути дійсною email адресою";
        return null;

      case 'phone':
        if (!value.trim()) return "Телефон обов'язковий";
        const cleanPhone = value.replace(/\D/g, '');
        if (cleanPhone.length < 10) return "Телефон має містити щонайменше 10 цифр";
        if (!/^(\+?38)?(0\d{9})$/.test(cleanPhone)) return "Невірний формат українського телефону";
        return null;

      case 'password':
        if (!value) return "Пароль обов'язковий";
        if (value.length < 6) return "Пароль має містити щонайменше 6 символів";
        if (!/(?=.*[a-zA-Z])/.test(value)) return "Пароль має містити щонайменше одну літеру";
        if (!/(?=.*\d)/.test(value)) return "Пароль має містити щонайменше одну цифру";
        return null;

      case 'confirmPassword':
        if (!value) return "Підтвердження паролю обов'язкове";
        if (value !== formData.password) return "Паролі не співпадають";
        return null;

      case 'agreeToTerms':
        if (!value) return "Ви повинні погодитись з умовами";
        return null;

      default:
        return null;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    Object.keys(formData).forEach(fieldName => {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
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
      
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const existingEmails = ['test@example.com', 'user@gmail.com'];
        if (existingEmails.includes(formData.email)) {
          setErrors({ email: 'Цей email вже використовується' });
          setIsSubmitting(false);
          return;
        }

        console.log('Дані форми для відправки:', {
          ...formData,
          password: '***' 
        });
        
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
        setTouched({});
        setPasswordStrength('');
        
      } catch (error) {
        console.error('Помилка реєстрації:', error);
        alert('Сталася помилка. Спробуйте ще раз.');
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

  const strengthInfo = getPasswordStrengthText();

  return (
    <div className="register-page">
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
                          onBlur={handleBlur}
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
                          onBlur={handleBlur}
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
                        onBlur={handleBlur}
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
                        onBlur={handleBlur}
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
                          onBlur={handleBlur}
                          placeholder="Мінімум 6 символів"
                        />
                        {errors.password && (
                          <div className="invalid-feedback">{errors.password}</div>
                        )}
                        {passwordStrength && (
                          <div className={`password-strength strength-${passwordStrength} mt-2`}>
                            <small className={`text-${strengthInfo.color}`}>
                              <i className={`fas fa-${passwordStrength === 'strong' ? 'shield-alt' : 'exclamation-triangle'} me-1`}></i>
                              {strengthInfo.text}
                            </small>
                            <div className="strength-bar mt-1">
                              <div className={`strength-progress strength-${passwordStrength}`}></div>
                            </div>
                          </div>
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
                          onBlur={handleBlur}
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
                          onBlur={handleBlur}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
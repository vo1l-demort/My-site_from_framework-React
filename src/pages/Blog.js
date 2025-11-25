import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Як обрати правильну технологію для вашого проекту",
      excerpt: "Детальний гайд по вибору між React, Angular та Vue.js для різних типів проектів.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web-development",
      categoryName: "Веб-розробка",
      author: "Олександр Коваленко",
      date: "15 листопада 2024",
      readTime: "8 хв",
      tags: ["React", "JavaScript", "Frontend"]
    },
    {
      id: 2,
      title: "Топ 10 інструментів для UI/UX дизайнерів у 2024 році",
      excerpt: "Огляд найкращих інструментів, які допоможуть створити вражаючі інтерфейси.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "design",
      categoryName: "Дизайн",
      author: "Марія Петренко",
      date: "12 листопада 2024",
      readTime: "6 хв",
      tags: ["UI/UX", "Figma", "Дизайн"]
    },
    {
      id: 3,
      title: "Оптимізація продуктивності веб-додатків на React",
      excerpt: "Практичні поради щодо покращення швидкодії ваших React-додатків.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "performance",
      categoryName: "Продуктивність",
      author: "Андрій Шевченко",
      date: "8 листопада 2024",
      readTime: "10 хв",
      tags: ["React", "Оптимізація", "JavaScript"]
    },
    {
      id: 4,
      title: "Створення адаптивних веб-сайтів з Bootstrap 5",
      excerpt: "Повний гайд з використанням Bootstrap 5 для створення адаптивних дизайнів.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web-development",
      categoryName: "Веб-розробка",
      author: "Олександр Коваленко",
      date: "5 листопада 2024",
      readTime: "7 хв",
      tags: ["Bootstrap", "CSS", "Адаптивність"]
    },
    {
      id: 5,
      title: "Принципи доступності (Accessibility) у веб-розробці",
      excerpt: "Як створити веб-сайти, доступні для всіх користувачів, включаючи людей з обмеженнями.",
      image: "https://images.unsplash.com/photo-1551650976-6debbf0f7551?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "accessibility",
      categoryName: "Доступність",
      author: "Наталія Лисенко",
      date: "1 листопада 2024",
      readTime: "9 хв",
      tags: ["Accessibility", "WCAG", "Інклюзивність"]
    },
    {
      id: 6,
      title: "Впровадження DevOps у невеликих командах",
      excerpt: "Як ефективно впровадити DevOps практики навіть у невеликих проектах.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "devops",
      categoryName: "DevOps",
      author: "Дмитро Бондаренко",
      date: "28 жовтня 2024",
      readTime: "11 хв",
      tags: ["DevOps", "CI/CD", "Автоматизація"]
    }
  ];

  const categories = [
    { id: 'all', name: 'Всі статті' },
    { id: 'web-development', name: 'Веб-розробка' },
    { id: 'design', name: 'Дизайн' },
    { id: 'performance', name: 'Продуктивність' },
    { id: 'accessibility', name: 'Доступність' },
    { id: 'devops', name: 'DevOps' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-page">
      <section className="blog-hero bg-gradient-primary text-white py-5">
        <div className="container-fluid px-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Наш Блог</h1>
              <p className="lead mb-4">
                Корисні статті, поради та новити зі світу веб-розробки та дизайну
              </p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-white-50">Головна</Link>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    Блог
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-filter py-4 bg-light">
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-12">
              <div className="categories-scroll">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`btn btn-category mx-2 mb-2 ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-posts py-5">
        <div className="container-fluid px-4">
          <div className="row g-4">
            {filteredPosts.map(post => (
              <div key={post.id} className="col-xxl-4 col-lg-6 col-md-6">
                <div className="blog-post-card card border-0 shadow-sm h-100">
                  <div className="post-image-wrapper">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="post-image"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="post-category-badge">
                      {post.categoryName}
                    </div>
                  </div>
                  
                  <div className="card-body p-4">
                    <div className="post-meta mb-3">
                      <span className="post-author">
                        <i className="fas fa-user me-1"></i>
                        {post.author}
                      </span>
                      <span className="post-date">
                        <i className="fas fa-calendar me-1"></i>
                        {post.date}
                      </span>
                      <span className="post-read-time">
                        <i className="fas fa-clock me-1"></i>
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="post-title mb-3">
                      <Link to={`/blog/${post.id}`} className="text-decoration-none">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="post-excerpt text-muted mb-4">
                      {post.excerpt}
                    </p>

                    <div className="post-tags mb-3">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="post-tag">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="post-actions text-en">
                      <Link to={`/blog/${post.id}`} className="btn btn-primary">
                        Читати далі
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section py-5 bg-light">
        <div className="container-fluid px-4">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="section-title mb-3">Підпишіться на наш блог</h2>
              <p className="section-subtitle mb-4">
                Отримуйте найсвіжіші статті та новини прямо на вашу email пошту
              </p>
              <div className="newsletter-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Ваш email адреса"
                  />
                  <button className="btn btn-primary" type="button">
                    Підписатися
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
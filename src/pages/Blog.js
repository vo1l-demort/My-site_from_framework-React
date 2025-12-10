import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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
      timestamp: new Date(2024, 10, 15).getTime(),
      readTime: "8 хв",
      tags: ["React", "JavaScript", "Frontend"],
      initialRating: 4.2,
      ratingCount: 15
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
      timestamp: new Date(2024, 10, 12).getTime(),
      readTime: "6 хв",
      tags: ["UI/UX", "Figma", "Дизайн"],
      initialRating: 4.5,
      ratingCount: 22
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
      timestamp: new Date(2024, 10, 8).getTime(),
      readTime: "10 хв",
      tags: ["React", "Оптимізація", "JavaScript"],
      initialRating: 4.7,
      ratingCount: 18
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
      timestamp: new Date(2024, 10, 5).getTime(),
      readTime: "7 хв",
      tags: ["Bootstrap", "CSS", "Адаптивність"],
      initialRating: 4.3,
      ratingCount: 10
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
      timestamp: new Date(2024, 10, 1).getTime(),
      readTime: "9 хв",
      tags: ["Accessibility", "WCAG", "Інклюзивність"],
      initialRating: 4.6,
      ratingCount: 12
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
      timestamp: new Date(2024, 9, 28).getTime(),
      readTime: "11 хв",
      tags: ["DevOps", "CI/CD", "Автоматизація"],
      initialRating: 4.4,
      ratingCount: 8
    },
    {
      id: 7,
      title: "Майбутнє веб-розробки: тренди 2024 року",
      excerpt: "Огляд ключових тенденцій та технологій, які формують майбутнє веб-розробки.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "trends",
      categoryName: "Тренди",
      author: "Олександр Коваленко",
      date: "20 листопада 2024",
      timestamp: new Date(2024, 10, 20).getTime(),
      readTime: "12 хв",
      tags: ["Тренди", "Майбутнє", "Технології"],
      initialRating: 4.1,
      ratingCount: 6
    },
    {
      id: 8,
      title: "Як створити ефективну команду розробників",
      excerpt: "Практичні поради з формування та управління високопродуктивною командою.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "management",
      categoryName: "Менеджмент",
      author: "Катерина Іваненко",
      date: "18 листопада 2024",
      timestamp: new Date(2024, 10, 18).getTime(),
      readTime: "9 хв",
      tags: ["Команда", "Менеджмент", "Продуктивність"],
      initialRating: 4.0,
      ratingCount: 5
    }
  ];

  // Динамічний список категорій з підрахунком
  const categories = useMemo(() => {
    const uniqueCategories = {};
    blogPosts.forEach(post => {
      if (!uniqueCategories[post.category]) {
        uniqueCategories[post.category] = {
          id: post.category,
          name: post.categoryName,
          count: 0
        };
      }
    });
    blogPosts.forEach(post => {
      uniqueCategories[post.category].count++;
    });
    const allCategories = Object.values(uniqueCategories);
    return [
      { id: 'all', name: 'Всі статті', count: blogPosts.length },
      ...allCategories.sort((a, b) => a.name.localeCompare(b.name))
    ];
  }, [blogPosts]);

  // Покращена фільтрація
  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts];
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post =>
        selectedTags.every(tag => post.tags.includes(tag))
      );
    }
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    return filtered;
  }, [blogPosts, activeCategory, selectedTags, searchQuery]);

  // Сортування
  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => {
      if (sortOrder === 'desc') {
        return b.timestamp - a.timestamp;
      } else {
        return a.timestamp - b.timestamp;
      }
    });
  }, [filteredPosts, sortOrder]);

  // Розрахунок даних для паджинації
  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Отримання постів для поточної сторінки
  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [sortedPosts, currentPage, postsPerPage]);

  // Функції для зміни сторінки
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Генерація номерів сторінок для відображення
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        pageNumbers.push(currentPage - 1);
        pageNumbers.push(currentPage);
        pageNumbers.push(currentPage + 1);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  // Скидання на першу сторінку при зміні категорії
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const handleSort = (order) => {
    setSortOrder(order);
  };

  // Обробка категорій
  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
    setSelectedTags([]);
  };

  // Обробка тегів
  const handleTagSelect = (tag) => {
    setSelectedTags(prev => {
      if (prev.includes(tag)) {
        return prev.filter(t => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
    setCurrentPage(1);
  };

  // Пошук
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Унікальні теги з фільтрованих постів
  const availableTags = useMemo(() => {
    const tags = new Set();
    filteredPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [filteredPosts]);

  return (
    <div className="blog-page">
      {/* Герой секція */}
      <section className="blog-hero bg-gradient-primary text-white py-5">
        <div className="container-fluid px-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Наш Блог</h1>
              <p className="lead mb-4">
                Корисні статті, поради та новити зі світу веб-розробки та дизайну
              </p>
              {/* Пошук */}
              <div className="search-container mb-4">
                <div className="input-group search-input-group">
                  <span className="input-group-text">
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Пошук статей за назвою, описом або тегами..."
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  {searchQuery && (
                    <button
                      className="btn btn-outline-light"
                      onClick={() => setSearchQuery('')}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </div>
              </div>
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

      {/* Фільтри та сортування */}
      <section className="filters-section py-4 bg-light">
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="filter-card card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title mb-3">
                    <i className="fas fa-filter me-2"></i>
                    Категорії
                  </h5>
                  <div className="categories-list">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        className={`category-link w-100 text-start mb-2 ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => handleCategorySelect(category.id)}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <span>{category.name}</span>
                          <span className="badge bg-primary rounded-pill">
                            {category.count}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="filters-main">
                <div className="active-filters">
                  {activeCategory !== 'all' && (
                    <span className="active-filter-item">
                      Категорія: {categories.find(c => c.id === activeCategory)?.name}
                      <button 
                        className="remove-filter"
                        onClick={() => setActiveCategory('all')}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </span>
                  )}
                  {selectedTags.map(tag => (
                    <span key={tag} className="active-filter-item">
                      #{tag}
                      <button 
                        className="remove-filter"
                        onClick={() => handleTagSelect(tag)}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </span>
                  ))}
                  {searchQuery && (
                    <span className="active-filter-item">
                      Пошук: "{searchQuery}"
                      <button 
                        className="remove-filter"
                        onClick={() => setSearchQuery('')}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </span>
                  )}
                </div>

                {availableTags.length > 0 && (
                  <div className="tags-filter mb-4">
                    <h6 className="mb-3">
                      <i className="fas fa-tags me-2"></i>
                      Теги
                    </h6>
                    <div className="tags-container">
                      {availableTags.map(tag => (
                        <button
                          key={tag}
                          className={`tag-btn ${selectedTags.includes(tag) ? 'active' : ''}`}
                          onClick={() => handleTagSelect(tag)}
                        >
                          #{tag}
                          {selectedTags.includes(tag) && (
                            <i className="fas fa-check ms-2"></i>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="sorting-section">
                  <div className="row align-items-center">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <div className="sorting-controls">
                        <span className="me-3">Сортувати:</span>
                        <div className="btn-group" role="group">
                          <button
                            type="button"
                            className={`btn ${sortOrder === 'desc' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => {
                              setSortOrder('desc');
                              setCurrentPage(1);
                            }}
                          >
                            <i className="fas fa-arrow-down me-2"></i>
                            Новіші
                          </button>
                          <button
                            type="button"
                            className={`btn ${sortOrder === 'asc' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => {
                              setSortOrder('asc');
                              setCurrentPage(1);
                            }}
                          >
                            <i className="fas fa-arrow-up me-2"></i>
                            Старіші
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="filter-info text-md-end">
                        <div className="filter-stats">
                          <span className="badge bg-info me-2">
                            {filteredPosts.length} знайдено
                          </span>
                          {activeCategory !== 'all' && (
                            <span className="badge bg-warning me-2">
                              Категорія: {categories.find(c => c.id === activeCategory)?.name}
                            </span>
                          )}
                          {selectedTags.length > 0 && (
                            <span className="badge bg-success">
                              Тегів: {selectedTags.length}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {(activeCategory !== 'all' || selectedTags.length > 0 || searchQuery) && (
                  <div className="reset-filters mt-3">
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => {
                        setActiveCategory('all');
                        setSelectedTags([]);
                        setSearchQuery('');
                        setCurrentPage(1);
                      }}
                    >
                      <i className="fas fa-times-circle me-1"></i>
                      Скинути всі фільтри
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Список постів */}
      <section className="blog-posts py-5">
        <div className="container-fluid px-4">
          {currentPosts.length === 0 ? (
            <div className="row">
              <div className="col-12 text-center">
                <div className="empty-state py-5">
                  <i className="fas fa-newspaper fa-3x text-muted mb-3"></i>
                  <h3>Статті не знайдено</h3>
                  <p className="text-muted">Спробуйте іншу категорію</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="row g-4">
                {currentPosts.map(post => (
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
                        {/* Рейтинг поста */}
                        <div className="post-rating mt-3">
                          <div className="d-flex align-items-center">
                            <StarRating 
                              rating={post.initialRating || 0}
                              readOnly={true}
                              size="sm"
                            />
                            <small className="ms-2 text-muted">
                              ({post.ratingCount || 0})
                            </small>
                          </div>
                        </div>

                        <div className="post-actions">
                          <Link to={`/blog/${post.id}`} className="btn btn-primary">
                            Читати далі
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Паджинація */}
              {totalPages > 1 && (
                <div className="row mt-5">
                  <div className="col-12">
                    <nav aria-label="Навігація по сторінках">
                      <ul className="pagination justify-content-center">
                        {/* Кнопка "Попередня" */}
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                          <button
                            className="page-link"
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                          >
                            <i className="fas fa-chevron-left me-1"></i>
                            Попередня
                          </button>
                        </li>

                        {/* Номери сторінок */}
                        {getPageNumbers().map((pageNum, index) => (
                          <li 
                            key={index} 
                            className={`page-item ${pageNum === '...' ? 'disabled dots' : ''} ${pageNum === currentPage ? 'active' : ''}`}
                          >
                            {pageNum === '...' ? (
                              <span className="page-link">...</span>
                            ) : (
                              <button
                                className="page-link"
                                onClick={() => handlePageChange(pageNum)}
                              >
                                {pageNum}
                              </button>
                            )}
                          </li>
                        ))}

                        {/* Кнопка "Наступна" */}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                          <button
                            className="page-link"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                          >
                            Наступна
                            <i className="fas fa-chevron-right ms-1"></i>
                          </button>
                        </li>
                      </ul>
                    </nav>

                    {/* Інформація про паджинацію */}
                    <div className="pagination-info text-center mt-3">
                      <small className="text-muted">
                        Сторінка {currentPage} з {totalPages} • 
                        Пости {((currentPage - 1) * postsPerPage) + 1} - 
                        {Math.min(currentPage * postsPerPage, totalPosts)} з {totalPosts}
                      </small>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Секція підписки */}
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
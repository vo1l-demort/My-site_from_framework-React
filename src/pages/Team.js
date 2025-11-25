import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Олександр Коваленко",
      position: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Спеціалізується на React та сучасному JavaScript. Має досвід роботи з великими проектами.",
      skills: ["React", "JavaScript", "TypeScript", "Bootstrap"],
      experience: "5+ років",
      projects: "50+ проектів",
      email: "oleksandr@example.com",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Марія Петренко",
      position: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Створює зручні та естетичні інтерфейси. Працювала з міжнародними брендами.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      experience: "4+ роки",
      projects: "80+ проектів",
      email: "maria@example.com",
      social: {
        linkedin: "#",
        dribbble: "#",
        behance: "#"
      }
    },
    {
      id: 3,
      name: "Андрій Шевченко",
      position: "Backend Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Експерт у Node.js та базах даних. Відповідає за архітектуру серверної частини.",
      skills: ["Node.js", "MongoDB", "PostgreSQL", "Docker"],
      experience: "6+ років",
      projects: "70+ проектів",
      email: "andrii@example.com",
      social: {
        linkedin: "#",
        github: "#",
        stackoverflow: "#"
      }
    },
    {
      id: 4,
      name: "Катерина Іваненко",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Координує проекти та забезпечує своєчасне виконання завдань. Має сертифікат PMP.",
      skills: ["Agile", "Scrum", "JIRA", "Risk Management"],
      experience: "7+ років",
      projects: "100+ проектів",
      email: "kateryna@example.com",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Дмитро Бондаренко",
      position: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Налаштовує CI/CD пайплайни та забезпечує стабільність інфраструктури.",
      skills: ["AWS", "Kubernetes", "Jenkins", "Terraform"],
      experience: "5+ років",
      projects: "40+ проектів",
      email: "dmytro@example.com",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 6,
      name: "Наталія Лисенко",
      position: "QA Engineer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Відповідає за якість продуктів. Спеціалізується на автоматизації тестування.",
      skills: ["Selenium", "Cypress", "Jest", "Postman"],
      experience: "4+ роки",
      projects: "60+ проектів",
      email: "natalia@example.com",
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="team-page">
      <section className="team-hero bg-gradient-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Наша Команда</h1>
              <p className="lead mb-4">
                Професіонали, які створюють майбутнє разом з вами
              </p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-white-50">Головна</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/about" className="text-white-50">Про нас</Link>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    Наша команда
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="team-main py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">Зустрічайте нашу команду</h2>
              <p className="section-subtitle">
                Талановиті фахівці, які об'єдналися для створення видатних продуктів
              </p>
            </div>
          </div>

          <div className="row">
            {teamMembers.map(member => (
              <div key={member.id} className="col-lg-4 col-md-6 mb-4">
                <div className="team-member-card card border-0 shadow-sm h-100">
                  <div className="member-image-wrapper">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="member-image"
                    />
                    <div className="member-overlay">
                      <div className="social-links">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="social-link">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        )}
                        {member.social.github && (
                          <a href={member.social.github} className="social-link">
                            <i className="fab fa-github"></i>
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} className="social-link">
                            <i className="fab fa-twitter"></i>
                          </a>
                        )}
                        {member.social.dribbble && (
                          <a href={member.social.dribbble} className="social-link">
                            <i className="fab fa-dribbble"></i>
                          </a>
                        )}
                        {member.social.behance && (
                          <a href={member.social.behance} className="social-link">
                            <i className="fab fa-behance"></i>
                          </a>
                        )}
                        {member.social.stackoverflow && (
                          <a href={member.social.stackoverflow} className="social-link">
                            <i className="fab fa-stack-overflow"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body text-center p-4">
                    <h4 className="member-name mb-2">{member.name}</h4>
                    <p className="member-position text-primary mb-3">{member.position}</p>
                    <p className="member-description text-muted mb-4">{member.description}</p>
                    
                    <div className="member-stats mb-4">
                      <div className="row">
                        <div className="col-6">
                          <div className="stat-item">
                            <div className="stat-value">{member.experience}</div>
                            <div className="stat-label">Досвіду</div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="stat-item">
                            <div className="stat-value">{member.projects}</div>
                            <div className="stat-label">Проектів</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="member-skills mb-4">
                      <h6 className="mb-3">Навички:</h6>
                      <div className="skills-list">
                        {member.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="member-contact">
                      <a href={`mailto:${member.email}`} className="btn btn-outline-primary btn-sm">
                        <i className="fas fa-envelope me-2"></i>
                        Написати
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-team py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="section-title mb-3">Хочете приєднатися до нашої команди?</h2>
              <p className="lead mb-4">
                Ми завжди шукаємо талановитих людей, які розділяють наші цінності та бажання створювати інновації.
              </p>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="benefit-item">
                    <i className="fas fa-gem text-primary me-3"></i>
                    <span>Конкурентна заробітна плата</span>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="benefit-item">
                    <i className="fas fa-home text-primary me-3"></i>
                    <span>Гнучкий графік роботи</span>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="benefit-item">
                    <i className="fas fa-dumbbell text-primary me-3"></i>
                    <span>Спортзал та абонементи</span>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="benefit-item">
                    <i className="fas fa-book text-primary me-3"></i>
                    <span>Навчання та розвиток</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="join-card card border-0 shadow">
                <div className="card-body p-4">
                  <i className="fas fa-briefcase fa-3x text-primary mb-3"></i>
                  <h5>Вакансії</h5>
                  <p className="text-muted mb-4">
                    Перегляньте відкриті позиції та надсилайте своє резюме
                  </p>
                  <a href="/careers" className="btn btn-primary">
                    Переглянути вакансії
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
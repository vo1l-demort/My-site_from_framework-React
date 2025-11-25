import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Blog.css';

const BlogPost = () => {
  const { id } = useParams();

  // Імітація бази даних постів
  const blogPosts = {
    1: {
      id: 1,
      title: "Як обрати правильну технологію для вашого проекту",
      content: `
        <p>Вибір технологічного стеку - один з найважливіших рішень на початку розробки проекту. Цей вибір впливає на продуктивність, масштабованість та підтримку вашого додатку в майбутньому.</p>

        <h2>Критерії вибору</h2>
        <p>Перш ніж обирати технологію, варто врахувати кілька ключових факторів:</p>

        <h3>Розмір команди</h3>
        <p>Для невеликих команд і стартапів відмінно підходить React завдяки своїй простоті та великій кількості готових рішень. Angular, з іншого боку, краще підходить для великих корпоративних проектів зі структурованою командою.</p>

        <h3>Крива навчання</h3>
        <p>Vue.js має найпологишу криву навчання, що робить його ідеальним вибором для початківців. React вимагає додаткових знань з управління станом, тоді як Angular має найкрутішу криву навчання.</p>

        <h3>Екосистема</h3>
        <p>React має найбільшу екосистему бібліотек та інструментів. Це означає, що для більшості завдань ви знайдете готове рішення.</p>

        <h2>Порівняльна таблиця</h2>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Критерій</th>
                <th>React</th>
                <th>Angular</th>
                <th>Vue.js</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Крива навчання</td>
                <td>Середня</td>
                <td>Висока</td>
                <td>Низька</td>
              </tr>
              <tr>
                <td>Розмір бандлу</td>
                <td>Маленький</td>
                <td>Великий</td>
                <td>Дуже маленький</td>
              </tr>
              <tr>
                <td>Гнучкість</td>
                <td>Висока</td>
                <td>Низька</td>
                <td>Висока</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Висновки</h2>
        <p>Кожна технологія має свої переваги та недоліки. Ключ до успіху - обирати інструмент, який найкраще підходить для ваших конкретних потреб та навичок команди.</p>

        <blockquote class="blockquote">
          <p class="mb-0">"Правильний вибір технології - це не про те, що модно, а про те, що ефективно для вашого проекту."</p>
        </blockquote>
      `,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "web-development",
      categoryName: "Веб-розробка",
      author: "Олександр Коваленко",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      date: "15 листопада 2024",
      readTime: "8 хв",
      tags: ["React", "JavaScript", "Frontend", "Angular", "Vue.js"]
    },
    2: {
      id: 2,
      title: "Топ 10 інструментів для UI/UX дизайнерів у 2024 році",
      content: `
        <p>Сучасний UI/UX дизайн вимагає використання потужних інструментів, які допомагають створювати інтуїтивні та естетичні інтерфейси. Ось топ-10 інструментів, які варто використовувати у 2024 році.</p>

        <h2>1. Figma</h2>
        <p>Figma залишається лідером серед інструментів для дизайну інтерфейсів. Її основні переваги:</p>
        <ul>
          <li>Реальний час спільної роботи</li>
          <li>Потужні прототипування</li>
          <li>Автоматизація через плагіни</li>
        </ul>

        <h2>2. Adobe XD</h2>
        <p>Для тих, хто працює в екосистемі Adobe, XD пропонує безшовну інтеграцію з іншими продуктами компанії.</p>

        <h2>3. Sketch</h2>
        <p>Sketch був піонером у галузі дизайну інтерфейсів і досі залишається популярним серед багатьох професіоналів.</p>

        <p>... та ще 7 інструментів, які допоможуть вам у роботі.</p>

        <h2>Висновок</h2>
        <p>Вибір інструменту залежить від ваших конкретних потреб, розміру команди та бюджету. Найкращий спосіб - спробувати кілька варіантів та обрати той, що найкраще підходить саме вам.</p>
      `,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "design",
      categoryName: "Дизайн",
      author: "Марія Петренко",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      date: "12 листопада 2024",
      readTime: "6 хв",
      tags: ["UI/UX", "Figma", "Дизайн", "Інструменти"]
    },
    3: {
      id: 3,
      title: "Оптимізація продуктивності веб-додатків на React",
      content: `
        <p>Продуктивність - ключовий фактор успіху сучасних веб-додатків. React пропонує багато можливостей для оптимізації, які часто залишаються невикористаними.</p>

        <h2>1. Мемоізація компонентів</h2>
        <p>Використовуйте React.memo для запобігання непотрібних ре-рендерів:</p>
        <pre><code>const MyComponent = React.memo(({ prop1, prop2 }) => {
  return <div>{prop1} {prop2}</div>;
});</code></pre>

        <h2>2. Ліниве завантаження</h2>
        <p>React.lazy дозволяє завантажувати компоненти тільки коли вони потрібні:</p>
        <pre><code>const LazyComponent = React.lazy(() => import('./LazyComponent'));</code></pre>

        <h2>3. Віртуалізація списків</h2>
        <p>Для великих списків використовуйте бібліотеки віртуалізації як react-window.</p>

        <h2>Висновок</h2>
        <p>Оптимізація продуктивності - це безперервний процес. Регулярно аналізуйте ваш додаток за допомогою React DevTools та вимірюйте реальну продуктивність.</p>
      `,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "performance",
      categoryName: "Продуктивність",
      author: "Андрій Шевченко",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      date: "8 листопада 2024",
      readTime: "10 хв",
      tags: ["React", "Оптимізація", "JavaScript", "Продуктивність"]
    },
    4: {
      id: 4,
      title: "Створення адаптивних веб-сайтів з Bootstrap 5",
      content: `
        <p>Bootstrap 5 приніс багато нових можливостей для створення сучасних адаптивних веб-сайтів. Ось основні принципи роботи з цією потужною бібліотекою.</p>

        <h2>Сіткова система</h2>
        <p>Bootstrap використовує 12-колонкову сітку для створення адаптивних макетів:</p>
        <pre><code>&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="col-md-6 col-lg-4"&gt;Контент&lt;/div&gt;
    &lt;div class="col-md-6 col-lg-8"&gt;Контент&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        <h2>Утиліти спейсингу</h2>
        <p>Bootstrap 5 пропонує комплексну систему спейсингу для швидкого стилізації:</p>
        <ul>
          <li>m-* - маргіни</li>
          <li>p-* - падінги</li>
          <li>gap-* - проміжки між елементами</li>
        </ul>

        <h2>Адаптивні точки зупину</h2>
        <p>Основні breakpoints у Bootstrap 5:</p>
        <ul>
          <li>sm: ≥576px</li>
          <li>md: ≥768px</li>
          <li>lg: ≥992px</li>
          <li>xl: ≥1200px</li>
          <li>xxl: ≥1400px</li>
        </ul>

        <h2>Висновок</h2>
        <p>Bootstrap 5 дозволяє швидко створювати професійні адаптивні сайти без необхідності писати складний CSS з нуля.</p>
      `,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "web-development",
      categoryName: "Веб-розробка",
      author: "Олександр Коваленко",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      date: "5 листопада 2024",
      readTime: "7 хв",
      tags: ["Bootstrap", "CSS", "Адаптивність", "Веб-розробка"]
    },
    5: {
      id: 5,
      title: "Принципи доступності (Accessibility) у веб-розробці",
      content: `
        <p>Доступність (accessibility) - це практика створення веб-сайтів, які можуть використовувати люди з різними можливостями. Це не лише моральний обов'язок, але й юридична вимога у багатьох країнах.</p>

        <h2>Основні принципи WCAG</h2>
        <p>Web Content Accessibility Guidelines (WCAG) визначають чотири основні принципи:</p>

        <h3>1. Сприйняття</h3>
        <p>Інформація та компоненти інтерфейсу повинні бути представлені так, щоб користувачі могли їх сприймати.</p>
        <ul>
          <li>Альтернативний текст для зображень</li>
          <li>Субтитри для відео</li>
          <li>Адаптивність до різних розмірів тексту</li>
        </ul>

        <h3>2. Функціональність</h3>
        <p>Компоненти інтерфейсу та навігація повинні бути функціональними.</p>
        <ul>
          <li>Повна керованість з клавіатури</li>
          <li>Достатньо часу для виконання дій</li>
          <li>Уникнення контенту, що спалахує</li>
        </ul>

        <h3>3. Зрозумілість</h3>
        <p>Інформація та робота з інтерфейсом повинні бути зрозумілими.</p>

        <h3>4. Надійність</h3>
        <p>Контент повинен бути достатньо надійним для роботи з різними технологіями допомоги.</p>

        <h2>Практичні поради</h2>
        <ul>
          <li>Використовуйте семантичний HTML</li>
          <li>Забезпечте достатній контраст кольорів</li>
          <li>Перевіряйте сайт за допомогою скрінрідерів</li>
        </ul>

        <h2>Висновок</h2>
        <p>Доступність - це не функція, яку можна додати в кінці розробки, а невід'ємна частина процесу створення якісного продукту для всіх користувачів.</p>
      `,
      image: "https://images.unsplash.com/photo-1551650976-6debbf0f7551?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "accessibility",
      categoryName: "Доступність",
      author: "Наталія Лисенко",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      date: "1 листопада 2024",
      readTime: "9 хв",
      tags: ["Accessibility", "WCAG", "Інклюзивність", "Веб-стандарти"]
    },
    6: {
      id: 6,
      title: "Впровадження DevOps у невеликих командах",
      content: `
        <p>DevOps - це не лише для великих корпорацій. Навіть невеликі команди можуть отримати значні переваги від впровадження DevOps практик.</p>

        <h2>Що таке DevOps для малих команд?</h2>
        <p>Для невеликих команд DevOps означає автоматизацію процесів, покращення співпраці та швидші випуски продукту.</p>

        <h2>Кроки впровадження</h2>

        <h3>1. Версійний контроль</h3>
        <p>Починайте з Git. Навіть для одного розробника версійний контроль є обов'язковим.</p>

        <h3>2. CI/CD пайплайн</h3>
        <p>Налаштуйте простий пайплайн з автоматичним тестуванням та деплоєм:</p>
        <ul>
          <li>GitHub Actions</li>
          <li>GitLab CI</li>
          <li>CircleCI</li>
        </ul>

        <h3>3. Інфраструктура як код</h3>
        <p>Використовуйте Terraform або CloudFormation для управління інфраструктурою.</p>

        <h3>4. Моніторинг</h3>
        <p>Впроваджуйте базовий моніторинг з використанням безкоштовних інструментів:</p>
        <ul>
          <li>Prometheus для метрик</li>
          <li>Grafana для візуалізації</li>
          <li>Sentry для помилок</li>
        </ul>

        <h2>Переваги для малих команд</h2>
        <ul>
          <li>Швидші випуски</li>
          <li>Менше помилок</li>
          <li>Краща співпраця</li>
          <li>Масштабованість</li>
        </ul>

        <h2>Висновок</h2>
        <p>DevOps не вимагає великих інвестицій. Починайте з малого, автоматизуйте найбільш болючі процеси та поступово вдосконалюйте ваші практики.</p>
      `,
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "devops",
      categoryName: "DevOps",
      author: "Дмитро Бондаренко",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      date: "28 жовтня 2024",
      readTime: "11 хв",
      tags: ["DevOps", "CI/CD", "Автоматизація", "Інфраструктура"]
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container-fluid py-5 px-4">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Статтю не знайдено</h1>
              <p>Запрошена стаття не існує або була видалена.</p>
              <Link to="/blog" className="btn btn-primary">
                Повернутися до блогу
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <section className="post-hero py-5">
        <div className="container-fluid px-4">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Головна</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/blog">Блог</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {post.title}
                  </li>
                </ol>
              </nav>

              <div className="post-header text-center mb-5">
                <div className="post-category-badge mb-3">
                  {post.categoryName}
                </div>
                <h1 className="post-title display-5 fw-bold mb-4">
                  {post.title}
                </h1>
                
                <div className="post-meta d-flex justify-content-center align-items-center flex-wrap gap-4 mb-4">
                  <div className="author-info d-flex align-items-center">
                    <img 
                      src={post.authorImage} 
                      alt={post.author}
                      className="author-image me-3"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80';
                      }}
                    />
                    <div>
                      <div className="author-name fw-bold">{post.author}</div>
                    </div>
                  </div>
                  
                  <div className="post-details">
                    <span className="post-date me-3">
                      <i className="fas fa-calendar me-1"></i>
                      {post.date}
                    </span>
                    <span className="post-read-time">
                      <i className="fas fa-clock me-1"></i>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              <div className="post-image-wrapper mb-5">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="post-featured-image"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="post-content pb-5">
        <div className="container-fluid px-4">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <article 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="post-tags-section mt-5 pt-4 border-top">
                <h5 className="mb-3">Теги:</h5>
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="post-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="author-card card border-0 shadow-sm mt-5">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <img 
                        src={post.authorImage} 
                        alt={post.author}
                        className="author-card-image"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80';
                        }}
                      />
                    </div>
                    <div className="col">
                      <h5 className="card-title mb-2">{post.author}</h5>
                      <p className="card-text text-muted mb-0">
                        Автор статті з багаторічним досвідом у веб-розробці та дизайні
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="post-navigation d-flex justify-content-between mt-5 pt-4 border-top">
                <Link to="/blog" className="btn btn-outline-primary">
                  <i className="fas fa-arrow-left me-2"></i>
                  До списку статей
                </Link>
                <button className="btn btn-outline-primary">
                  Поділитися
                  <i className="fas fa-share-alt ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
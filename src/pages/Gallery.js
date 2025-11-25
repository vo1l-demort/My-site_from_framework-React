import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = {
    websites: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Корпоративний сайт",
        category: "websites"
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        title: "Landing Page для стартапу",
        category: "websites"
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
        title: "Сайт для малого бізнесу",
        category: "websites"
      }
    ],
    design: [
      {
        id: 11,
        src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "UI/UX Дизайн",
        category: "design"
      },
      {
        id: 12,
        src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
        title: "Мобільний додаток дизайн",
        category: "design"
      },
      {
        id: 13,
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        title: "Дизайн e-commerce",
        category: "design"
      }
    ]
  };

  const allImages = [...galleryImages.websites, ...galleryImages.design];

  return (
    <div className="gallery-page">
      <section className="gallery-hero bg-gradient-primary text-white py-5">
        <div className="container-fluid px-4">
          <div className="row text-center">
            <div className="col-12">
              <h1 className="display-4 fw-bold mb-4">Галерея Робіт</h1>
              <p className="lead">Найкращі проекти та рішення</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-content py-5">
        <div className="container-fluid px-4">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className="gallery-filter">
                <button className={`btn btn-filter ${activeCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('all')}>
                  Всі роботи
                </button>
                <button className={`btn btn-filter ${activeCategory === 'websites' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('websites')}>
                  Веб-сайти
                </button>
                <button className={`btn btn-filter ${activeCategory === 'design' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('design')}>
                  Дизайн
                </button>
              </div>
            </div>
          </div>

          <div className="row g-3">
            {allImages.filter(img => activeCategory === 'all' || img.category === activeCategory)
              .map(image => (
                <div key={image.id} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="gallery-item" onClick={() => setSelectedImage(image)}>
                    <img src={image.src} alt={image.title} className="gallery-image" />
                    <div className="gallery-overlay">
                      <div className="gallery-info">
                        <h5>{image.title}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="image-info">
              <h4>{selectedImage.title}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
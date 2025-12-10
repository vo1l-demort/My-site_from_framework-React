import React, { useState, useEffect } from 'react';
import './StarRating.css';

const StarRating = ({ 
  rating = 0, 
  onRatingChange, 
  readOnly = false, 
  size = 'md',
  postId = null 
}) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [hoverRating, setHoverRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  useEffect(() => {
    if (postId) {
      const savedRating = localStorage.getItem(`post_rating_${postId}`);
      if (savedRating) {
        setCurrentRating(parseFloat(savedRating));
      }
    }
  }, [postId]);

  const handleRating = (newRating) => {
    if (readOnly || isLoading) return;

    setIsLoading(true);
    
    setTimeout(() => {
      setCurrentRating(newRating);
      
      if (postId) {
        localStorage.setItem(`post_rating_${postId}`, newRating.toString());
      }
      
      if (onRatingChange) {
        onRatingChange(newRating);
      }
      
      setIsLoading(false);
    }, 300);
  };

  const handleMouseEnter = (starIndex) => {
    if (readOnly || isLoading) return;
    setHoverRating(starIndex);
  };

  const handleMouseLeave = () => {
    if (readOnly || isLoading) return;
    setHoverRating(0);
  };

  const getStarSize = () => {
    switch(size) {
      case 'sm': return '20px';
      case 'md': return '24px';
      case 'lg': return '32px';
      case 'xl': return '40px';
      default: return '24px';
    }
  };

  const starSize = getStarSize();

  return (
    <div className={`star-rating ${readOnly ? 'read-only' : ''} ${isLoading ? 'loading' : ''}`}>
      <div 
        className="stars-container"
        onMouseLeave={handleMouseLeave}
      >
        {[1, 2, 3, 4, 5].map((star) => {
          const displayRating = hoverRating || currentRating;
          const isFilled = star <= displayRating;
          
          return (
            <button
              key={star}
              type="button"
              className={`star-button ${isFilled ? 'filled' : 'empty'}`}
              onClick={() => handleRating(star)}
              onMouseEnter={() => handleMouseEnter(star)}
              disabled={readOnly || isLoading}
              style={{ width: starSize, height: starSize }}
              aria-label={`Оцінити на ${star} зірок`}
              title={readOnly ? `Рейтинг: ${currentRating}/5` : `Поставити ${star} зірок`}
            >
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 24 24" 
                fill={isFilled ? "currentColor" : "none"} 
                stroke="currentColor" 
                strokeWidth="1"
              >
                <polygon 
                  points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" 
                />
              </svg>
            </button>
          );
        })}
      </div>
      
      <div className="rating-info">
        <span className="rating-value">{currentRating.toFixed(1)}</span>
        <span className="rating-separator">/</span>
        <span className="rating-max">5</span>
        
        {!readOnly && (
          <div className="rating-hint">
            <small className="text-muted">Клацніть зірку для оцінки</small>
          </div>
        )}
      </div>
      
      {isLoading && (
        <div className="rating-spinner">
          <div className="spinner-border spinner-border-sm" role="status"></div>
        </div>
      )}
    </div>
  );
};

export default StarRating;
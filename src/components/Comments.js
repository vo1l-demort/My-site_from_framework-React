import React, { useState } from 'react';
import './Comments.css';

const Comments = () => {
  const [comments, setComments] = useState([]);
  
  const [newCommentText, setNewCommentText] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleAddComment = () => {
    if (!newCommentText.trim()) return; 

    const newComment = {
      id: Date.now(), 
      text: newCommentText,
      date: new Date().toLocaleString() 
    };

    setComments([...comments, newComment]);
    setNewCommentText(''); 
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const startEditing = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const saveEdit = (id) => {
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, text: editingText } : comment
    ));
    setEditingId(null);
    setEditingText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  return (
    <div className="comments-section mt-5">
      <h3 className="mb-4">Коментарі ({comments.length})</h3>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Залишити відгук</h5>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Напишіть ваш коментар тут..."
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleAddComment}>
            <i className="fas fa-paper-plane me-2"></i>Надіслати
          </button>
        </div>
      </div>

      <div className="comments-list">
        {comments.length === 0 && <p className="text-muted">Поки що немає коментарів. Будьте першим!</p>}
        
        {comments.map((comment, index) => (
          <div key={comment.id} className="card mb-3 comment-card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold text-primary mb-0">Коментар {index + 1}</h6>
                <small className="text-muted">{comment.date}</small>
              </div>

              {editingId === comment.id ? (
                <div className="edit-mode">
                  <textarea
                    className="form-control mb-2"
                    rows="2"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  ></textarea>
                  <div className="btn-group btn-group-sm">
                    <button className="btn btn-success" onClick={() => saveEdit(comment.id)}>
                      <i className="fas fa-check me-1"></i>Зберегти
                    </button>
                    <button className="btn btn-secondary" onClick={cancelEdit}>
                      <i className="fas fa-times me-1"></i>Скасувати
                    </button>
                  </div>
                </div>
              ) : (
                <div className="view-mode">
                  <p className="card-text mb-3">{comment.text}</p>
                  <div className="btn-group btn-group-sm">
                    <button 
                      className="btn btn-outline-secondary" 
                      onClick={() => startEditing(comment.id, comment.text)}
                    >
                      <i className="fas fa-edit me-1"></i>Редагувати
                    </button>
                    <button 
                      className="btn btn-outline-danger" 
                      onClick={() => handleDeleteComment(comment.id)}
                    >
                      <i className="fas fa-trash-alt me-1"></i>Видалити
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
import React, { useState, useEffect } from 'react';
import { database, ref, push, onValue } from '../firebaseConfig';
import './CommentSection.css';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Load comments and replies from Firebase
  useEffect(() => {
    const commentsRef = ref(database, 'comments');
    const unsubscribe = onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedComments = Object.keys(data).map(key => {
          const comment = data[key];
          return {
            id: key,
            ...comment,
            timestamp: new Date(comment.timestamp).toLocaleString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            }),
            replies: comment.replies ? Object.entries(comment.replies).map(([replyId, reply]) => ({
              id: replyId,
              ...reply,
              timestamp: new Date(reply.timestamp).toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })
            })) : []
          };
        });
        setComments(loadedComments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
      } else {
        setComments([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!newComment.name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!newComment.message.trim()) {
      setError('Please enter your message');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await push(ref(database, 'comments'), {
        ...newComment,
        timestamp: new Date().toISOString()
      });
      
      setNewComment({
        name: '',
        email: '',
        message: ''
      });
      setSuccess('Thank you for your comment!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to post comment. Please try again.');
      console.error('Error posting comment:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReplySubmit = async (commentId) => {
    if (!replyContent.trim()) {
      setError('Please enter your reply');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await push(ref(database, `comments/${commentId}/replies`), {
        name: newComment.name || 'Anonymous',
        message: replyContent,
        timestamp: new Date().toISOString()
      });
      
      setReplyContent('');
      setReplyingTo(null);
      setSuccess('Reply posted successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to post reply. Please try again.');
      console.error('Error posting reply:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getAvatar = (name) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    return (
      <div className="author-avatar">
        {initials}
      </div>
    );
  };

  return (
    <section className="comment-section">
      <div className="section-header">
        <h2 className="section-title">Share Your Experience</h2>
        <p className="section-subtitle">
          We value your feedback. Share your thoughts about our school community.
        </p>
      </div>
      
      <div className="comment-form-container">
        <form onSubmit={handleSubmit} className="comment-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newComment.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                maxLength={50}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={newComment.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                maxLength={100}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message*</label>
            <textarea
              id="message"
              name="message"
              value={newComment.message}
              onChange={handleInputChange}
              placeholder="Share your experience with our school..."
              rows="5"
              required
              maxLength={500}
            ></textarea>
            <div className="char-counter">
              {newComment.message.length}/500 characters
            </div>
          </div>
          
          {error && (
            <div className="alert error">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              {error}
            </div>
          )}
          
          {success && (
            <div className="alert success">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {success}
            </div>
          )}
          
          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
              aria-label="Post comment"
            >
              {isSubmitting ? (
                <>
                  <span className="spinner" aria-hidden="true"></span>
                  Posting...
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Post Comment
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      
      <div className="comments-container">
        <div className="comments-header">
          <h3 className="comments-title">
            Community Voices
            <span className="comments-count">{comments.length}</span>
          </h3>
        </div>
        
        {comments.length === 0 ? (
          <div className="empty-state">
            <svg width="60" height="60" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
              <path d="M8 9h8v2H8zm0 3h6v2H8z"/>
            </svg>
            <h4>No comments yet</h4>
            <p>Be the first to share your thoughts about our school</p>
          </div>
        ) : (
          <div className="comments-grid">
            {comments.map(comment => (
              <article key={comment.id} className="comment-card">
                <header className="comment-header">
                  {getAvatar(comment.name)}
                  <div className="comment-meta">
                    <h4 className="author-name">{comment.name}</h4>
                    <div className="meta-details">
                      {comment.email && (
                        <span className="author-email">
                          <svg width="14" height="14" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                          {comment.email}
                        </span>
                      )}
                      <span className="comment-date">
                        <svg width="14" height="14" viewBox="0 0 24 24">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                        {comment.timestamp}
                      </span>
                    </div>
                  </div>
                </header>
                <div className="comment-body">
                  <p>{comment.message}</p>
                </div>
                <footer className="comment-footer">
                  <button 
                    className="action-btn reply-btn"
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
                    </svg>
                    {replyingTo === comment.id ? 'Cancel' : 'Reply'}
                  </button>
                </footer>

                {/* Reply Form */}
                {replyingTo === comment.id && (
                  <div className="reply-form">
                      <div className="form-group">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newComment.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                maxLength={50}
              />
            </div>
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder="Write your reply..."
                      rows="3"
                      maxLength="300"
                    ></textarea>
                   
                    <div className="reply-actions">
                      <button 
                        className="cancel-btn"
                        onClick={() => {
                          setReplyingTo(null);
                          setReplyContent('');
                        }}
                      >
                        Cancel
                      </button>
                      <button 
                        className="submit-reply-btn"
                        onClick={() => handleReplySubmit(comment.id)}
                        disabled={isSubmitting || !replyContent.trim()}
                      >
                        {isSubmitting ? 'Posting...' : 'Post Reply'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Replies List */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="replies-list">
                    {comment.replies.map(reply => (
                      <div key={reply.id} className="reply-card">
                        <div className="reply-header">
                          {getAvatar(reply.name)}
                          <div className="reply-meta">
                            <span className="reply-author">{reply.name}</span>
                            <span className="reply-date">
                              <svg width="12" height="12" viewBox="0 0 24 24">
                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                              </svg>
                              {reply.timestamp}
                            </span>
                          </div>
                        </div>
                        <div className="reply-body">
                          <p>{reply.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
import React, { useCallback, useEffect, useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);

  const fetchComments = useCallback(async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();

    setComments(data);
  }, []);

  useEffect(() => {
    fetchComments();
  }, [comments, fetchComments]);

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-type': 'application/json'
      }
    });

    setComment([]);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`api/comments/${commentId}`, {
      method: 'DELETE',
      body: JSON.stringify({ commentId }),
      headers: {
        'Content-type': 'application/json'
      }
    });
  };

  return (
    <div className="comments-page">
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="comment-input"
      />
      <button className="sort-button sport" onClick={submitComment}>
        Submit comment
      </button>
      <button className="sort-button sport" onClick={fetchComments}>
        Load comments
      </button>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="comment">
            {comment.id}. {comment.text}
            <button
              onClick={() => deleteComment(comment.id)}
              className="delete-button"
            >
              &#10006;
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsPage;

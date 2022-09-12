import React, { useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);

  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();

    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="comments-page">
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
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
          </div>
        );
      })}
    </div>
  );
};

export default CommentsPage;

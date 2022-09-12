import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);
  const router = useRouter();

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

  const deleteComment = async (commentId) => {
    const response = await fetch(`api/comments/${commentId}`, {
      method: 'DELETE'
    });

    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <div className="comments-page">
      <div className="comment-input-container">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="comment-input"
          placeholder="Enter you comment"
        />
        <button className="button width-fit-content" onClick={submitComment}>
          Submit
        </button>
      </div>
      <button className="button width-fit-content" onClick={fetchComments}>
        Load comments
      </button>
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="comment"
            onClick={() => router.push(`/comments/${comment.id}`)}
          >
            {comment.id}. {comment.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                return deleteComment(comment.id);
              }}
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

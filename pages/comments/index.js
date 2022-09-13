import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './styles.module.css';

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
    <div className={styles.commentsPage}>
      <div className={styles.commentInputContainer}>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={styles.commentInput}
          placeholder="Enter you comment"
        />
        <button
          className={`${styles.submitButton} ${styles.widthFitContent}`}
          onClick={submitComment}
        >
          Submit
        </button>
      </div>
      <button
        className={`${styles.loadButton} ${styles.widthFitContent}`}
        onClick={fetchComments}
      >
        Load comments
      </button>
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className={styles.comment}
            onClick={() => router.push(`/comments/${comment.id}`)}
          >
            {comment.id}. {comment.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                return deleteComment(comment.id);
              }}
              className={styles.deleteButton}
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

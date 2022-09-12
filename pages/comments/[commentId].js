import { useRouter } from 'next/router';
import React from 'react';

const CommentDetails = ({ comment }) => {
  const { id, text } = comment;
  const router = useRouter();

  return (
    <div>
      <h2>
        {id}. {text}
      </h2>
      <button className="button" onClick={() => router.push('/comments')}>
        &larr; Back
      </button>
    </div>
  );
};

export default CommentDetails;

export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/comments');
  const comments = await response.json();

  const paths = comments.map((comment) => ({
    params: {
      commentId: `${comment.id}`
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps = async ({ params }) => {
  const { commentId } = params;

  const response = await fetch(
    `http://localhost:3000/api/comments/${commentId}`
  );
  const comment = await response.json();

  return {
    props: {
      comment
    }
  };
};
